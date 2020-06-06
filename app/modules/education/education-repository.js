const Repository = container.repository;

/**
 * EducationRepository repository
 */
class EducationRepository extends Repository {
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

module.exports = EducationRepository;
