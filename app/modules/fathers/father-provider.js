module.exports = (container) => {
  container.constant('fatherModel', require('./father-model'));
  container.service('father', require('./father'), 'fatherModel');
  container.service('fatherRepository', require('./father-repository'), 'father');
  container.service('fatherController', require('./father-controller'), 'fatherRepository');
  container.constant('fatherRoutes', require('./father-routes'));
  container.constant('fatherValidationRules', require('./father-validation-rules'));
};
