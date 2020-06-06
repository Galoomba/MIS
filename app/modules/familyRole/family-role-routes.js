const familyRoleController = container.familyRoleController;

module.exports = (router) => {
  /**
   * List all familyRoles.
   */
  router.get('/', familyRoleController.all);

  /**
   * Finde familyRole by id.
   */
  router.get('/:id', familyRoleController.find);

  /**
   * Paginate familyRoles.
   */
  router.get('/paginate/:page/:perPage', familyRoleController.paginate);

  /**
   * Find all familyRoles by the given conditions.
   */
  router.post('/filter', familyRoleController.findBy);

  /**
   * Paginate familyRoles by the given conditions.
   */
  router.post('/filter/:page/:perPage', familyRoleController.paginateBy);

  /**
   * Create new familyRole.
   */
  router.post('/', container.familyRoleValidationRules.apply('insert'), familyRoleController.insert);

  /**
   * Update the given familyRole.
   */
  router.patch('/', container.familyRoleValidationRules.apply('update'), familyRoleController.update);

  /**
   * Delete the given familyRole.
   */
  router.delete('/:id', familyRoleController.delete);

  return router;
};
