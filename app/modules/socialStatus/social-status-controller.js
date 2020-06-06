const Controller = container.controller;

/**
 * SocialStatusController Controller
 */
class SocialStatusController extends Controller {
  /**
   * Specify methods that will not be checked
   * for login.
   *
   * @return  {array}
   */
  static skipLoginCheck = [];

  /**
   * Specify methods that will not be checked
   * for permissions.
   *
   * @return  {array}
   */
  static skipPermissionCheck = [];

  /**
   * Init new object
   *
   * @param   {object}  repository
   *
   * @return  {void}
   */
  constructor(repository) {
    super(repository);
  }
}

module.exports = SocialStatusController;
