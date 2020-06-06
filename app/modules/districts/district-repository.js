const Repository = container.repository;

/**
 * DistrictRepository repository
 */
class DistrictRepository extends Repository {
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

module.exports = DistrictRepository;
