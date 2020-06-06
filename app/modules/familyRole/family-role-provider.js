module.exports = (container) => {
  container.constant('familyRoleModel', require('./family-role-model'));
  container.service('familyRole', require('./family-role'), 'familyRoleModel');
  container.service('familyRoleRepository', require('./family-role-repository'), 'familyRole');
  container.service('familyRoleController', require('./family-role-controller'), 'familyRoleRepository');
  container.constant('familyRoleRoutes', require('./family-role-routes'));
  container.constant('familyRoleValidationRules', require('./family-role-validation-rules'));
};
