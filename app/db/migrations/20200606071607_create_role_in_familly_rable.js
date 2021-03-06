
exports.up = function(knex, Promise) {
  return knex.schema.createTable('role_in_family', (table) => {
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
  await knex.schema.dropTableIfExists('role_in_family');
  return await knex.raw('SET foreign_key_checks = 1;');
};
