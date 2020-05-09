const Repository = container.repository;

/**
 * roleRepository repository
 */
class roleRepository extends Repository {
  /**
   * Init new object
   *
   * @param   {object}  model
   *
   * @return  {void}
   */
  constructor(model) {
    super(model);
  }
  /**
   * assign the given data.
   *
   * @param   {array}  data
   *
   * @return  {object}
   */
  async assign(data) {
    const model = await container.transaction(container.knex, async (trx) => {
      const relationArray = data.permissions.map((obj)=>{
        return {
          role_id: data.roleId,
          permission_id: obj.id,
        };
      });
      await container.knex('role_permission').del().where({role_id: data.roleId}).transacting(trx);
      await container.knex('role_permission').insert(relationArray).transacting(trx);

      return this.model.query(trx).findById(data.roleId).eager('[permissions]');
    });

    return model;
  }
}

module.exports = roleRepository;
