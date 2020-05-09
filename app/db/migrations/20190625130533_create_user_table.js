
exports.up = async (knex, Promise) => {
  await knex.schema.createTable('user', (table) => {
    table.increments('id');
    table.string('email', 100).notNullable();
    table.string('name', 100).notNullable();
    table.string('phone', 100).notNullable();
    table.string('password').notNullable();
    table.string('user_number', 100).notNullable();
    table.boolean('deleted').defaultTo(0);
    table.timestamps();
    table.unique('email');
  });

  /**
   * Create default admin user.
   */
  const password = await require('bcrypt').hash(process.env.ADMIN_USER_PASSWORD, 12);
  console.log(process.env.DB_HOST );
  return knex('user').insert({
    email: process.env.ADMIN_USER_EMAIL,
    password: password,
    user_number: 1,
    phone: '01212121211',
    name: process.env.ADMIN_USER_NAME,
    created_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
    updated_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user');
};
