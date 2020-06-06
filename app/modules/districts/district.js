const Mapper = container.Mapper;

/**
 * District class.
 */
class District extends Mapper {
  /**
    * Create new District
    *
    * @param   {object}  model
    *
    * @return  {void}
    */
  constructor(model) {
    super(model);

    this.id = null;
    /** Add attributes here **/
    this.name = null;
    this.isAvailable = null;
    /** relation */
    this.city = null;

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
    /** Add attributes here **/
    name: 'name',
    isAvailable: 'is_available',
    /** relation */
    city: 'city',
    deleted: 'deleted',
    created_at: 'created_at',
    updated_at: 'updated_at',
  };
}

module.exports = District;
