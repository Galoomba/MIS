const Repository = container.repository;

/**
 * FamilyRepository repository
 */
class FamilyRepository extends Repository {
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

module.exports = FamilyRepository;
