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
  router.patch('/', container.userValidationRules.apply('update'), userController.update);
  /**
   * list users
   */
  router.get('/', userController.all);
  /**
   * Get user by id
   */
  router.get('/:id', userController.find);
  /**
   * Get user by id
   */
  router.get('/:page/:perPage', userController.paginate);

  /**
   * delete user
   */
  router.delete('/:id', userController.delete);

  return router;
};
