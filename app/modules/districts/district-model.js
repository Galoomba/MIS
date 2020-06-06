const Model = container.Model;

/**
 * DistrictModel model
 */
class DistrictModel extends Model {
  /**
   * Return table name for this model.
   *
   * @return  {string}
   */
  static tableName = 'districts';

  /**
   * Return model relations.
   *
   * @return  {object}
   */
  static get relationMappings() {
    return {
      city: {
        relation: container.Model.BelongsToOneRelation,
        modelClass: container.city,
        join: {
          from: 'cities.id',
          to: 'districts.city_id',
        },
      },
    };
  }
}

module.exports = DistrictModel;
