const bookingController = container.bookingController;

module.exports = (router) => {
  /**
   * List all bookings.
   */
  router.get('/', bookingController.all);

  /**
   * Finde booking by id.
   */
  router.get('/:id', bookingController.find);

  /**
   * Paginate bookings.
   */
  router.get('/paginate/:page/:perPage', bookingController.paginate);

  /**
   * Find all bookings by the given conditions.
   */
  router.post('/filter', bookingController.findBy);

  /**
   * Paginate bookings by the given conditions.
   */
  router.post('/filter/:page/:perPage', bookingController.paginateBy);

  /**
   * Create new booking.
   */
  router.post('/', bookingController.insert);
  /**
   * Create booking calldown.
   */
  router.post('/calldown', container.bookingValidationRules.apply('calldown'), bookingController.setCallDown);

  /**
   * Update the given booking.
   */
  router.patch('/', container.bookingValidationRules.apply('update'), bookingController.update);

  /**
   * Delete the given booking.
   */
  router.delete('/:id', bookingController.hardDelete);

  return router;
};
