module.exports = (container) => {
  container.constant('districtModel', require('./district-model'));
  container.service('district', require('./district'), 'districtModel');
  container.service('districtRepository', require('./district-repository'), 'district');
  container.service('districtController', require('./district-controller'), 'districtRepository');
  container.constant('districtRoutes', require('./district-routes'));
  container.constant('districtValidationRules', require('./district-validation-rules'));
};
