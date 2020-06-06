
exports.up = function(knex, Promise) {
  return knex.schema.createTable('social_status', (table) => {
    table.increments('id');
    /** Entities */
    table.string('name', 200).unique().notNullable();

    /** Basics */
    table.boolean('deleted').default(0);
    table.timestamps();
  });
};

exports.down = async function(knex, Promise) {
  await knex.raw('SET foreign_key_checks = 0;');
  await knex.schema.dropTableIfExists('social_status');
  return await knex.raw('SET foreign_key_checks = 1;');
};
