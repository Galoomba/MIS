exports.up = async (knex, Promise) => {
  return knex.schema.table('user', (table) => {
    table.integer('social_status_id').nullable().unsigned();
    table.integer('educational_level_id').nullable().unsigned();
    table.integer('family_id').nullable().unsigned();
    table.integer('role_in_family_id').nullable().unsigned();
    table.integer('father_id').nullable().unsigned();


    table.foreign('social_status_id').references('social_status.id');
    table.foreign('educational_level_id').references('educational_level.id');
    table.foreign('role_in_family_id').references('role_in_family.id');
    table.foreign('father_id').references('fathers.id');
    table.foreign('family_id').references('family.id');
  });
};

exports.down = async (knex, Promise) => {
};
