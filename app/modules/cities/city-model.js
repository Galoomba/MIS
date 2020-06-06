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
}

module.exports = CityModel;
