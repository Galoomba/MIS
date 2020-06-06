const Repository = container.repository;

/**
 * ChurchRepository repository
 */
class ChurchRepository extends Repository {
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

module.exports = ChurchRepository;
