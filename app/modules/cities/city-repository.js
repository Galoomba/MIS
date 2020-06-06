const Repository = container.repository;

/**
 * CityRepository repository
 */
class CityRepository extends Repository {
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

module.exports = CityRepository;
