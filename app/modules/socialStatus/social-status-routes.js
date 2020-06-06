const socialStatusController = container.socialStatusController;

module.exports = (router) => {
  /**
   * List all socialStatuss.
   */
  router.get('/', socialStatusController.all);

  /**
   * Finde socialStatus by id.
   */
  router.get('/:id', socialStatusController.find);

  /**
   * Paginate socialStatuss.
   */
  router.get('/paginate/:page/:perPage', socialStatusController.paginate);

  /**
   * Find all socialStatuss by the given conditions.
   */
  router.post('/filter', socialStatusController.findBy);

  /**
   * Paginate socialStatuss by the given conditions.
   */
  router.post('/filter/:page/:perPage', socialStatusController.paginateBy);

  /**
   * Create new socialStatus.
   */
  router.post('/', container.socialStatusValidationRules.apply('insert'), socialStatusController.insert);

  /**
   * Update the given socialStatus.
   */
  router.patch('/', container.socialStatusValidationRules.apply('update'), socialStatusController.update);

  /**
   * Delete the given socialStatus.
   */
  router.delete('/:id', socialStatusController.delete);

  return router;
};
