const Repository = container.repository;

/**
 * SocialStatusRepository repository
 */
class SocialStatusRepository extends Repository {
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

module.exports = SocialStatusRepository;
