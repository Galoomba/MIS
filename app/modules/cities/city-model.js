const Model = container.Model;

/**
 * CityModel model
 */
class CityModel extends Model {
  /**
   * Return table name for this model.
   *
   * @return  {string}
   */
  static tableName = 'cities';

  /**
   * Return model relations.
   *
   * @return  {object}
   */
  static get relationMappings() {
    return {
      district: {
        relation: container.Model.HasManyRelation,
        modelClass: container.district,
        join: {
          from: 'cities.id',
          to: 'districts.city_id',
        },
      },
    };
  }
}

module.exports = CityModel;
