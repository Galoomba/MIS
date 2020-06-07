
exports.up = async (knex, Promise) => {
  await knex.schema.createTable('user', (table) => {
    table.increments('id');
    table.string('email', 100).nullable();
    table.string('english_name', 200).nullable();
    table.string('arabic_name', 200).nullable();
    table.boolean('is_dead').defaultTo(0);
    table.string('relative_name', 200).nullable();
    table.enu('gender', ['F', 'M', ' ']).notNullable().defaultTo(' ');
    table.string('national_id', 20).nullable();
    table.date('date_of_birth').nullable();
    table.string('educational_level_other', 200).nullable();
    table.string('prime_phone', 100).nullable();
    table.string('sec_phone', 100).nullable();
    table.string('job', 200).nullable();
    table.string('father_name_other', 200).nullable();

    table.string('password').notNullable();
    table.string('user_number', 100).notNullable();
    table.boolean('deleted').defaultTo(0);
    table.timestamps();
    table.unique(['national_id', 'prime_phone', 'user_number']);
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
    prime_phone: '01212121211',
    english_name: process.env.ADMIN_USER_NAME,
    created_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
    updated_at: require('moment')().format('YYYY-MM-DD hh:mm:ss'),
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user');
};
