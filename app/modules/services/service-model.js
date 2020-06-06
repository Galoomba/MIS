const Model = container.Model;

/**
 * ServiceModel model
 */
class ServiceModel extends Model {
  /**
   * Return table name for this model.
   *
   * @return  {string}
   */
  static tableName = 'services';


  /**
   * Return model relations.
   *
   * @return  {object}
   */
  static get relationMappings() {
    return {
      church: {
        relation: container.Model.BelongsToOneRelation,
        modelClass: container.church,
        join: {
          from: 'services.church_id',
          to: 'churches.id',
        },
      },
    };
  }
}

module.exports = ServiceModel;
