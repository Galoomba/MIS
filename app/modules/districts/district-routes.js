const districtController = container.districtController;

module.exports = (router) => {
  /**
   * List all districts.
   */
  router.get('/', districtController.all);

  /**
   * Finde district by id.
   */
  router.get('/:id', districtController.find);

  /**
   * Paginate districts.
   */
  router.get('/paginate/:page/:perPage', districtController.paginate);

  /**
   * Find all districts by the given conditions.
   */
  router.post('/filter', districtController.findBy);

  /**
   * Paginate districts by the given conditions.
   */
  router.post('/filter/:page/:perPage', districtController.paginateBy);

  /**
   * Create new district.
   */
  router.post('/', container.districtValidationRules.apply('insert'), districtController.insert);

  /**
   * Update the given district.
   */
  router.patch('/', container.districtValidationRules.apply('update'), districtController.update);

  /**
   * Delete the given district.
   */
  router.delete('/:id', districtController.delete);

  return router;
};
