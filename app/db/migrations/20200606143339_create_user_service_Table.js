
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_services', (table) => {
    table.increments('id');
    /** Entities */
    table.integer('user_id').nullable().unsigned();
    table.integer('service_id').nullable().unsigned();
    table.integer('number_of_persons').notNullable();

    table.foreign('user_id').references('user.id');
    table.foreign('service_id').references('services.id');

    /** Basics */
    table.boolean('deleted').default(0);
    table.timestamps();
  });
};

exports.down = async function(knex, Promise) {
  await knex.raw('SET foreign_key_checks = 0;');
  await knex.schema.dropTableIfExists('book_services');
  return await knex.raw('SET foreign_key_checks = 1;');
};
