
exports.up = function(knex, Promise) {
  return knex.schema.createTable('family', (table) => {
    table.increments('id');
    /** Entities */
    table.integer('head_of_family_id').nullable().unsigned();
    table.integer('church_id').nullable().unsigned();
    table.integer('district_id').nullable().unsigned();

    table.date('marriage_date').nullable();
    table.string('neighbor_unit', 200).nullable();
    table.string('street', 200).nullable();
    table.string('building_num', 200).nullable();
    table.string('apartment_num', 200).nullable();
    table.string('floor_num', 200).nullable();
    table.string('address_link', 700).nullable();
    table.string('mark_of_address', 200).nullable();
    table.string('notes', 200).nullable();


    table.foreign('head_of_family_id').references('user.id');
    table.foreign('church_id').references('churches.id');
    table.foreign('district_id').references('districts.id');


    /** Basics */
    table.boolean('deleted').default(0);
    table.timestamps();
  });
};

exports.down = async function(knex, Promise) {
  await knex.raw('SET foreign_key_checks = 0;');
  await knex.schema.dropTableIfExists('family');
  return await knex.raw('SET foreign_key_checks = 1;');
};
