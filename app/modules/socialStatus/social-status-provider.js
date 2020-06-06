module.exports = (container) => {
  container.constant('socialStatusModel', require('./social-status-model'));
  container.service('socialStatus', require('./social-status'), 'socialStatusModel');
  container.service('socialStatusRepository', require('./social-status-repository'), 'socialStatus');
  container.service('socialStatusController', require('./social-status-controller'), 'socialStatusRepository');
  container.constant('socialStatusRoutes', require('./social-status-routes'));
  container.constant('socialStatusValidationRules', require('./social-status-validation-rules'));
};
