
exports.up = function(knex, Promise) {
  return knex.schema.createTable('districts', (table) => {
    table.increments('id');
    /** Entities */
    table.string('name', 500).unique().notNullable();

    table.integer('city_id').notNullable().unsigned();


    table.foreign('city_id').references('cities.id');

    /** Basics */
    table.boolean('is_available').default(1);
    table.boolean('deleted').default(0);
    table.timestamps();
  });
};

exports.down = async function(knex, Promise) {
  await knex.raw('SET foreign_key_checks = 0;');
  await knex.schema.dropTableIfExists('districts');
  return await knex.raw('SET foreign_key_checks = 1;');
};
