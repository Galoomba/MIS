const churchController = container.churchController;

module.exports = (router) => {
  /**
   * List all churchs.
   */
  router.get('/', churchController.all);

  /**
   * Find church by id.
   */
  router.get('/:id', churchController.find);

  /**
   * Paginate churchs.
   */
  router.get('/paginate/:page/:perPage', churchController.paginate);

  /**
   * Find all churchs by the given conditions.
   */
  router.post('/filter', churchController.findBy);

  /**
   * Paginate churchs by the given conditions.
   */
  router.post('/filter/:page/:perPage', churchController.paginateBy);

  /**
   * Create new church.
   */
  router.post('/', container.churchValidationRules.apply('insert'), churchController.insert);

  /**
   * Update the given church.
   */
  router.patch('/', container.churchValidationRules.apply('update'), churchController.update);

  /**
   * Delete the given church.
   */
  router.delete('/:id', churchController.delete);

  return router;
};
