const Controller = container.controller;

/**
 * roleController Controller
 */
class roleController extends Controller {
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

  /**
   * Assign user to role
   * @param {object} req
   * @param {object} res
   */
  async assign(req, res) {
    return res.json(await this.repo.assign(req.body));
  }
}

module.exports = roleController;
