module.exports = (container) => {
  container.constant('serviceModel', require('./service-model'));
  container.service('service', require('./service'), 'serviceModel');
  container.service('serviceRepository', require('./service-repository'), 'service');
  container.service('serviceController', require('./service-controller'), 'serviceRepository');
  container.constant('serviceRoutes', require('./service-routes'));
  container.constant('serviceValidationRules', require('./service-validation-rules'));
};
