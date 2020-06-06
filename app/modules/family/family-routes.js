const familyController = container.familyController;

module.exports = (router) => {
  /**
   * List all familys.
   */
  router.get('/', familyController.all);

  /**
   * Finde family by id.
   */
  router.get('/:id', familyController.find);

  /**
   * Paginate familys.
   */
  router.get('/paginate/:page/:perPage', familyController.paginate);

  /**
   * Find all familys by the given conditions.
   */
  router.post('/filter', familyController.findBy);

  /**
   * Paginate familys by the given conditions.
   */
  router.post('/filter/:page/:perPage', familyController.paginateBy);

  /**
   * Create new family.
   */
  router.post('/', container.familyValidationRules.apply('insert'), familyController.insert);

  /**
   * Update the given family.
   */
  router.patch('/', container.familyValidationRules.apply('update'), familyController.update);

  /**
   * Delete the given family.
   */
  router.delete('/:id', familyController.delete);

  return router;
};
