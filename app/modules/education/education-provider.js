module.exports = (container) => {
  container.constant('educationModel', require('./education-model'));
  container.service('education', require('./education'), 'educationModel');
  container.service('educationRepository', require('./education-repository'), 'education');
  container.service('educationController', require('./education-controller'), 'educationRepository');
  container.constant('educationRoutes', require('./education-routes'));
  container.constant('educationValidationRules', require('./education-validation-rules'));
};
