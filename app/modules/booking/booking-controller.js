const Controller = container.controller;

/**
 * BookingController Controller
 */
class BookingController extends Controller {
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
  static skipPermissionCheck = ['insert', 'setCallDown'];

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
   * Insert the given data.
   *
   * @param   {object}  req
   * @param   {object}  res
   *
   * @return  {object}
   */
  async insert(req, res) {
    return res.json(await this.repo.insert(req.user,
        req.body, this.getModuleConfig('allowedRelations', 'insert'), this.getModuleConfig('upsertOptions', 'insert')));
  }

  /**
   * set callDown
   *
   * @param   {object}  req
   * @param   {object}  res
   *
   * @return  {object}
   */
  async setCallDown(req, res) {
    return res.json(await this.repo.setCallDown(req.user, req.body));
  }
}

module.exports = BookingController;
