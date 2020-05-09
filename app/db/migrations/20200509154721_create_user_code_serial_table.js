
exports.up = function(knex, Promise) {
  return knex.schema.createTable('serial', (table) => {
    table.increments('id');
    /** Entities */
    table.integer('counter').notNullable();

    /** Basics */
    table.boolean('is_active').default(0);
    table.boolean('deleted').default(0);
    table.timestamps();
  });
};

exports.down = async function(knex, Promise) {
  await knex.raw('SET foreign_key_checks = 0;');
  await knex.schema.dropTableIfExists('serial');
  return await knex.raw('SET foreign_key_checks = 1;');
};
