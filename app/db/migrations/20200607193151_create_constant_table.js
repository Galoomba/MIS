
exports.up = function(knex, Promise) {
  return knex.schema.createTable('constants', (table) => {
    table.increments('id');
    /** Entities */
    table.string('name');
    table.json('value');
    /** Basics */
    table.boolean('deleted').default(0);
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {

};
