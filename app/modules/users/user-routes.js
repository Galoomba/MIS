const userController = container.userController;

module.exports = (router) => {
  /**
   * Login using the given credentials.
   */
  router.post('/login', container.userValidationRules.apply('login'), userController.login);

  /**
   * Add new user.
   */
  router.post('/', userController.insert);
  /**
   * Update user
   */
  router.patch('/', userController.update);


  return router;
};
