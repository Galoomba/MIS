module.exports = (container) => {
  container.constant('familyModel', require('./family-model'));
  container.service('family', require('./family'), 'familyModel');
  container.service('familyRepository', require('./family-repository'), 'family');
  container.service('familyController', require('./family-controller'), 'familyRepository');
  container.constant('familyRoutes', require('./family-routes'));
  container.constant('familyValidationRules', require('./family-validation-rules'));
};
