
exports.up = function(knex, Promise) {
  return knex.schema.createTable('services', (table) => {
    table.increments('id');
    /** Entities */
    table.integer('church_id').nullable().unsigned();
    table.string('name', 200).unique().notNullable();
    table.string('type', 200).unique().notNullable();
    table.dateTime('date').notNullable();
    table.integer('capacity').notNullable();
    table.integer('available_seats').notNullable();
    table.foreign('church_id').references('churches.id');


    /** Basics */
    table.boolean('deleted').default(0);
    table.timestamps();
  });
};

exports.down = async function(knex, Promise) {
  await knex.raw('SET foreign_key_checks = 0;');
  await knex.schema.dropTableIfExists('services');
  return await knex.raw('SET foreign_key_checks = 1;');
};
