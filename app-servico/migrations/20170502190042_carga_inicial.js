const lista = [{
  idcontato: 1,
  nomecontato: 'Joaquina',
  telefonecontato: '987654321',
  enderecocontato: 'av. rua'
},{
  idcontato: 2,
  nomecontato: 'Joãozinho',
  telefonecontato: '123456789',
  enderecocontato: 'r. avenida'
}]

exports.up = function(knex, Promise) {
  return knex('contatos').insert(lista);
};

exports.down = function(knex, Promise) {
  return knex('contatos').del().whereIn('idcontato', lista.map(e => e.idcontato));
};
