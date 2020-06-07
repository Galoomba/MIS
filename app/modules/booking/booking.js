const Mapper = container.Mapper;

/**
 * Booking class.
 */
class Booking extends Mapper {
  /**
    * Create new Booking
    *
    * @param   {object}  model
    *
    * @return  {void}
    */
  constructor(model) {
    super(model);

    this.id = null;
    this.user = null;
    this.service = null;
    /** Add attributes here **/
    this.numberOfPersons = null;
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
    user: 'user',
    service: 'service',
    /** Add attributes here **/
    numberOfPersons: 'number_of_persons',
    deleted: 'deleted',
    created_at: 'created_at',
    updated_at: 'updated_at',
  };
}

module.exports = Booking;
