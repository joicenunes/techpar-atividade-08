
exports.up = (knex, Promise) => {
  return knex.schema.createTable('contatos', (table) =>{
    table.increments('idcontato');
    table.string('nomecontato').notNullable();
    table.string('telefonecontato');
    table.string('enderecocontato');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contatos');
};
