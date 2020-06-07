const Model = container.Model;

/**
 * BookingModel model
 */
class BookingModel extends Model {
  /**
   * Return table name for this model.
   *
   * @return  {string}
   */
  static tableName = 'book_services';

  /**
   * Return model relations.
   *
   * @return  {object}
   */
  static get relationMappings() {
    return {
      user: {
        relation: container.Model.BelongsToOneRelation,
        modelClass: container.user,
        join: {
          from: 'book_services.user_id',
          to: 'user.id',
        },
      },
      service: {
        relation: container.Model.BelongsToOneRelation,
        modelClass: container.service,
        join: {
          from: 'book_services.service_id',
          to: 'services.id',
        },
      },
    };
  }
}

module.exports = BookingModel;
