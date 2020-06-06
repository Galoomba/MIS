exports.seed = async (knex, Promise) => {
  await knex('permission').where('model', 'city').del();
  await knex('permission').insert([
    {
      name: 'List',
      key: 'list',
      model: 'city',
      created_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
      updated_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
    },
    {
      name: 'Find',
      key: 'find',
      model: 'city',
      created_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
      updated_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
    },
    {
      name: 'Insert',
      key: 'insert',
      model: 'city',
      created_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
      updated_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
    },
    {
      name: 'Update',
      key: 'update',
      model: 'city',
      created_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
      updated_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
    },
    {
      name: 'Delete',
      key: 'delete',
      model: 'city',
      created_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
      updated_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
    },
    {
      name: 'all',
      key: 'all',
      model: 'city',
      created_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
      updated_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
    },
  ]);
};
