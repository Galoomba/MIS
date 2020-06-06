
exports.up = function(knex, Promise) {
  return knex.schema.createTable('churches', (table) => {
    table.increments('id');
    /** Entities */
    table.string('name', 200).unique().notNullable();

    /** Basics */
    table.boolean('is_available').default(1);
    table.boolean('deleted').default(0);
    table.timestamps();
  });
};

exports.down = async function(knex, Promise) {
  await knex.raw('SET foreign_key_checks = 0;');
  await knex.schema.dropTableIfExists('churches');
  return await knex.raw('SET foreign_key_checks = 1;');
};
