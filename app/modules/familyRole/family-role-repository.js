const Repository = container.repository;

/**
 * FamilyRoleRepository repository
 */
class FamilyRoleRepository extends Repository {
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

module.exports = FamilyRoleRepository;
