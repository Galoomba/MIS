const cityController = container.cityController;

module.exports = (router) => {
  /**
   * List all citys.
   */
  router.get('/', cityController.all);

  /**
   * Finde city by id.
   */
  router.get('/:id', cityController.find);

  /**
   * Paginate citys.
   */
  router.get('/paginate/:page/:perPage', cityController.paginate);

  /**
   * Find all citys by the given conditions.
   */
  router.post('/filter', cityController.findBy);

  /**
   * Paginate citys by the given conditions.
   */
  router.post('/filter/:page/:perPage', cityController.paginateBy);

  /**
   * Create new city.
   */
  router.post('/', container.cityValidationRules.apply('insert'), cityController.insert);

  /**
   * Update the given city.
   */
  router.patch('/', container.cityValidationRules.apply('update'), cityController.update);

  /**
   * Delete the given city.
   */
  router.delete('/:id', cityController.delete);

  return router;
};
