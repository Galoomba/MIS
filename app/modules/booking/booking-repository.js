const Repository = container.repository;

/**
 * BookingRepository repository
 */
class BookingRepository extends Repository {
  /**
   * Init new object
   *
   * @param   {object}  model
   *
   * @return  {void}
   */
  constructor(model) {
    super(model);
  }


  /**
   * insert the given data.
   * @param   {object}  user
   * @param   {object}  data
   * @param   {string} allowedRelations
   * @param   {object} upsertOptions
   * @param   {object} transaction
   *
   * @return  {object}
   */
  async insert(user, data, allowedRelations = '[]', upsertOptions = {}, transaction = false) {
    const model = await container.transaction(container.knex, async (trx) => {
      const service = await container.service.query(trx).findById(data.service.id);
      // service is available
      if (!service) container.errorHandlers.notFound('service');
      // validate the number is available in service
      if (data.numberOfPersons > service.available_seats)container.errorHandlers.outOfCapacity('service');

      const [callDownQuery] = await container.knex('constants').select().where({name: container.config.MASS_CALLDOWN});
      const callDown = JSON.parse(callDownQuery.value);

      const [lastBookedService] = await this.model.query(trx).where({user_id: user.id}).
          eager('[service]').orderBy('created_at', 'desc').limit(1);
      const serviceCallDownDate = container.moment(lastBookedService.service.date)
          .add({days: callDown.day, months: callDown.month});
      if (!(serviceCallDownDate < container.moment(service.date)))container.errorHandlers.alreadyAttended();

      // validate number of family
      const [family] = await container.user.query(trx).count('* as number')
          .whereRaw(`family_id = (select family_id from user where id = ${user.id})`);
      if (!(family.number <= data.numberOfPersons)) container.errorHandlers.familyExcide();

      // reserve seats in service
      const availableSeats = service.available_seats - data.numberOfPersons;
      await container.service.query(trx).patch({availableSeats}).where({id: service.id});
      data.user = {id: user.id};
      return super.insert(data, allowedRelations, upsertOptions, trx );
    });

    return model;
  }
  /**
   * Hard delete record based on the given condition.
   * @param   {object}  user
   * @param   {number}  id
   * @param   {string}  attribute
   *
   * @return  {number}
   */
  async hardDelete(user, id, attribute = 'id') {
    // free the service seats
    return container.transaction(container.knex, async (trx) => {
      const [bookingRecord] = await this.model.query(trx).where({user_id: user.id, id: id}).eager('[service]');
      const availableSeats = bookingRecord.service.available_seats + bookingRecord.number_of_persons;
      await container.service.query(trx).patch({availableSeats}).where({id: bookingRecord.service.id});
      return this.model.query(trx).where(attribute, id).where({user_id: user.id}).hardDelete();
    });
  }

  /**
   * insert the given data.
   * @param   {object}  user
   * @param   {object}  data
   *
   * @return  {object}
   */
  async setCallDown(user, data) {
    return container.knex('constants').update({value: JSON.stringify(data)}).where({name: container.config.MASS_CALLDOWN});
  }
}

module.exports = BookingRepository;
