const fatherController = container.fatherController;

module.exports = (router) => {
  /**
   * List all fathers.
   */
  router.get('/', fatherController.all);

  /**
   * Finde father by id.
   */
  router.get('/:id', fatherController.find);

  /**
   * Paginate fathers.
   */
  router.get('/paginate/:page/:perPage', fatherController.paginate);

  /**
   * Find all fathers by the given conditions.
   */
  router.post('/filter', fatherController.findBy);

  /**
   * Paginate fathers by the given conditions.
   */
  router.post('/filter/:page/:perPage', fatherController.paginateBy);

  /**
   * Create new father.
   */
  router.post('/', container.fatherValidationRules.apply('insert'), fatherController.insert);

  /**
   * Update the given father.
   */
  router.patch('/', container.fatherValidationRules.apply('update'), fatherController.update);

  /**
   * Delete the given father.
   */
  router.delete('/:id', fatherController.delete);

  return router;
};
