const Mapper = container.Mapper;

/**
 * User class.
 */
class User extends Mapper {
  /**
    * Create new user
    *
    * @param   {object}  model
    *
    * @return  {void}
    */
  constructor(model) {
    super(model);
    this.id = null;
    /** Relations */
    this.roles = null;
    this.permissions = null;
    /** Attributes */
    this.name = null;
    this.email = null;
    this.password = null;
    this.phone = null;
    this.userNumber = null;
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
  hiddenFields = ['deleted', 'password'];

  /**
   * Specify mapping fields.
   *
   * @return  {object}
   */
  mappings = {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    permissions: 'permissions',
    roles: 'roles',
    phone: 'phone',
    userNumber: 'user_number',
    deleted: 'deleted',
    created_at: 'created_at',
    updated_at: 'updated_at',
  };
}

module.exports = User;
