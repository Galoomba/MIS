const password = require('objection-password')({allowEmptyPassword: true});
const Model = password(container.Model);

/**
 * User model
 */
class UserModel extends Model {
  /**
   * Return table name for this model.
   *
   * @return  {string}
   */
  static tableName = 'user';

  /**
   * Return model relations.
   *
   * @return  {object}
   */
  static get relationMappings() {
    return {
      roles: {
        relation: container.Model.ManyToManyRelation,
        modelClass: container.role,
        join: {
          from: 'user.id',
          through: {
            from: 'user_role.user_id',
            to: 'user_role.role_id',
            extra: ['created_at', 'updated_at'],
          },
          to: 'role.id',
        },
      },
      churches: {
        relation: container.Model.ManyToManyRelation,
        modelClass: container.church,
        join: {
          from: 'user.id',
          through: {
            from: 'user_church.user_id',
            to: 'user_church.church_id',
          },
          to: 'churches.id',
        },
      },
      socialStatus: {
        relation: container.Model.BelongsToOneRelation,
        modelClass: container.socialStatus,
        join: {
          from: 'user.social_status_id',
          to: 'social_status.id',
        },
      },
      educationalLevel: {
        relation: container.Model.BelongsToOneRelation,
        modelClass: container.education,
        join: {
          from: 'user.educational_level_id',
          to: 'educational_level.id',
        },
      },
      roleInFamily: {
        relation: container.Model.BelongsToOneRelation,
        modelClass: container.familyRole,
        join: {
          from: 'user.role_in_family_id',
          to: 'role_in_family.id',
        },
      },
      father: {
        relation: container.Model.BelongsToOneRelation,
        modelClass: container.father,
        join: {
          from: 'user.father_id',
          to: 'fathers.id',
        },
      },
      family: {
        relation: container.Model.BelongsToOneRelation,
        modelClass: container.family,
        join: {
          from: 'user.family_id',
          to: 'family.id',
        },
      },
    };
  }
}
module.exports = UserModel;
