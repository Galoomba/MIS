const Mapper = container.Mapper;

/**
 * User class.
 */
class User extends Mapper {
  /**
    * Create new user
    *
    * @param   {object}  model
    *
    * @return  {void}
    */
  constructor(model) {
    super(model);
    this.id = null;
    /** Relations */
    this.roles = null;
    this.permissions = null;
    this.socialStatus = null;
    this.educationalLevel = null;
    this.roleInFamily = null;
    this.father = null;
    this.family = null;
    /** Attributes */
    this.email = null;
    this.englishName = null;
    this.arabicName = null;
    this.isDead = null;
    this.relativeName = null;
    this.gender = null;
    this.nationalId = null;
    this.dateOfBirth = null;
    this.educationalLevelOther = null;
    this.primePhone = null;
    this.secPhone = null;
    this.job = null;
    this.fatherNameOther = null;
    this.password = null;
    this.userNumber = null;
    this.deleted = null;
    this.created_at = null;
    this.updated_at = null;

    return model;
  }

  /**
   * Specify fields that will be hidden
   * from the model.
   *
   * @return  {array}
   */
  hiddenFields = ['deleted', 'password'];

  /**
   * Specify mapping fields.
   *
   * @return  {object}
   */
  mappings = {
    id: 'id',
    email: 'email',
    englishName: 'english_name',
    arabicName: 'arabic_name',
    isDead: 'is_dead',
    relativeName: 'relative_name',
    gender: 'gender',
    nationalId: 'national_id',
    dateOfBirth: 'date_of_birth',
    educationalLevelOther: 'educational_level_other',
    primePhone: 'prime_phone',
    secPhone: 'sec_phone',
    job: 'job',
    fatherNameOther: 'father_name_other',
    password: 'password',

    /** relations */
    permissions: 'permissions',
    roles: 'roles',
    socialStatus: 'socialStatus',
    educationalLevel: 'educationalLevel',
    roleInFamily: 'roleInFamily',
    father: 'father',
    family: 'family',

    userNumber: 'user_number',
    deleted: 'deleted',
    created_at: 'created_at',
    updated_at: 'updated_at',
  };
}

module.exports = User;
