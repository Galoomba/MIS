const userController = container.userController;

module.exports = (router) => {
  /**
   * Login using the given credentials.
   */
  router.post('/login', container.userValidationRules.apply('login'), userController.login);

  /**
   * Login using the given credentials.
   */
  router.post('/', userController.insert);

  return router;
};
