const Mapper = container.Mapper;

/**
 * Church class.
 */
class Church extends Mapper {
  /**
    * Create new Church
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
    deleted: 'deleted',
    created_at: 'created_at',
    updated_at: 'updated_at',
  };
}

module.exports = Church;
