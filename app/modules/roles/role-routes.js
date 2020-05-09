const roleController = container.roleController;

module.exports = (router) => {
  /**
   * List roles.
   */
  router.get('/', roleController.all);

  /**
   * Finde role by id.
   */
  router.get('/:id', roleController.find);

  /**
   * Create new role.
   */
  router.post('/', container.roleValidationRules.apply('insert'), roleController.insert);

  /**
   * Create new role.
   */
  router.post('/assign', container.roleValidationRules.apply('assign'), roleController.assign);

  /**
   * Update the given role.
   */
  router.patch('/', container.roleValidationRules.apply('update'), roleController.update);

  /**
   * Delete the given role.
   */
  router.delete('/:id', roleController.delete);

  return router;
};
