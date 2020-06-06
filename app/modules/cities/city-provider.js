module.exports = (container) => {
  container.constant('cityModel', require('./city-model'));
  container.service('city', require('./city'), 'cityModel');
  container.service('cityRepository', require('./city-repository'), 'city');
  container.service('cityController', require('./city-controller'), 'cityRepository');
  container.constant('cityRoutes', require('./city-routes'));
  container.constant('cityValidationRules', require('./city-validation-rules'));
};
