const serviceController = container.serviceController;

module.exports = (router) => {
  /**
   * List all services.
   */
  router.get('/', serviceController.all);

  /**
   * Finde service by id.
   */
  router.get('/:id', serviceController.find);

  /**
   * Paginate services.
   */
  router.get('/paginate/:page/:perPage', serviceController.paginate);

  /**
   * Find all services by the given conditions.
   */
  router.post('/filter', serviceController.findBy);

  /**
   * Paginate services by the given conditions.
   */
  router.post('/filter/:page/:perPage', serviceController.paginateBy);

  /**
   * Create new service.
   */
  router.post('/', container.serviceValidationRules.apply('insert'), serviceController.insert);

  /**
   * Update the given service.
   */
  router.patch('/', container.serviceValidationRules.apply('update'), serviceController.update);

  /**
   * Delete the given service.
   */
  router.delete('/:id', serviceController.delete);

  return router;
};
