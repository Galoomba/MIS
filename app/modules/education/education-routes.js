const educationController = container.educationController;

module.exports = (router) => {
  /**
   * List all educations.
   */
  router.get('/', educationController.all);

  /**
   * Finde education by id.
   */
  router.get('/:id', educationController.find);

  /**
   * Paginate educations.
   */
  router.get('/paginate/:page/:perPage', educationController.paginate);

  /**
   * Find all educations by the given conditions.
   */
  router.post('/filter', educationController.findBy);

  /**
   * Paginate educations by the given conditions.
   */
  router.post('/filter/:page/:perPage', educationController.paginateBy);

  /**
   * Create new education.
   */
  router.post('/', container.educationValidationRules.apply('insert'), educationController.insert);

  /**
   * Update the given education.
   */
  router.patch('/', container.educationValidationRules.apply('update'), educationController.update);

  /**
   * Delete the given education.
   */
  router.delete('/:id', educationController.delete);

  return router;
};
