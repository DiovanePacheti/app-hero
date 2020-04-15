/** criando uma tabela - npx knex migrate:make create_ongs*/
/** rodando a migration - npx knex migrate:latest*/
exports.up = function(knex) {
  knex.schema.createTable('ongs', function(table){
  	table.string('id').primary();
  	table.string('name').notNullable();
  	table.string('email').notNullable();
  	table.string('whatsapp').notNullable();
  	table.string('city').notNullable();
  	table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};
