const Model = container.Model;

/**
 * ChurchModel model
 */
class ChurchModel extends Model {
  /**
   * Return table name for this model.
   *
   * @return  {string}
   */
  static tableName = 'churches';
}

module.exports = ChurchModel;
