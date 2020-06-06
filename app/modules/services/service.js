const Mapper = container.Mapper;

/**
 * Service class.
 */
class Service extends Mapper {
  /**
    * Create new Service
    *
    * @param   {object}  model
    *
    * @return  {void}
    */
  constructor(model) {
    super(model);

    this.id = null;
    this.church = null;
    /** Add attributes here **/
    this.type = null;
    this.name = null;
    this.date = null;
    this.capacity = null;
    this.availableSeats = null;
    this.deleted = null;
    this.created_at = null;
    this.updated_at = null;

    return model;
  }

  /**
   * Specify fields that will be hidden
   * from the model.
   *
   * @return  {array}
   */
  hiddenFields = ['deleted'];

  /**
   * Specify mapping fields.
   *
   * @return  {object}
   */
  mappings = {
    id: 'id',
    church: 'church',
    /** Add attributes here **/
    type: 'type',
    name: 'name',
    date: 'date',
    capacity: 'capacity',
    availableSeats: 'available_seats',
    deleted: 'deleted',
    created_at: 'created_at',
    updated_at: 'updated_at',
  };
}

module.exports = Service;
