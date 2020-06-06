const Repository = container.repository;

/**
 * FatherRepository repository
 */
class FatherRepository extends Repository {
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
}

module.exports = FatherRepository;
