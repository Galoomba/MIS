module.exports = (container) => {
  container.constant('churchModel', require('./church-model'));
  container.service('church', require('./church'), 'churchModel');
  container.service('churchRepository', require('./church-repository'), 'church');
  container.service('churchController', require('./church-controller'), 'churchRepository');
  container.constant('churchRoutes', require('./church-routes'));
  container.constant('churchValidationRules', require('./church-validation-rules'));
};
