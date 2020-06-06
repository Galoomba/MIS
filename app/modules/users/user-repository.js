const Repository = container.repository;

/**
 * User repository
 */
class UserRepository extends Repository {
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
   * Login using the given credentials.
   *
   * @param   {string}  email
   * @param   {string}  password
   *
   * @return  {object}
   */
  async login(email, password) {
    return container.auth.attempt(email, password);
  }

  /**
   * Login using the given credentials.
   *
   * @param   {string}  data
   *
   * @return  {object}
   */
  async insert(data) {
    const model = await container.transaction(container.knex, async (trx) => {
      const userSerial = await container.serial.generateSerial(trx);
      data.userNumber = userSerial;
      return super.insert(data, '[]', {relate: true, unrelate: true, noupdate: true}, trx);
    });
    return model;
  }
}

module.exports = UserRepository;
