
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('user_church', (table) => {
    table.increments('id');
    table.integer('user_id').notNullable().unsigned();
    table.integer('church_id').notNullable().unsigned();
    table.foreign('user_id').references('user.id');
    table.foreign('church_id').references('churches.id');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  
};
