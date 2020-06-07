module.exports = (container) => {
  container.constant('bookingModel', require('./booking-model'));
  container.service('booking', require('./booking'), 'bookingModel');
  container.service('bookingRepository', require('./booking-repository'), 'booking');
  container.service('bookingController', require('./booking-controller'), 'bookingRepository');
  container.constant('bookingRoutes', require('./booking-routes'));
  container.constant('bookingValidationRules', require('./booking-validation-rules'));
};
