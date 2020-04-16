/**
* utilizando o knex para fazer a conexão 
*/
const knex = require('knex');

// referenciando  as configuraçoes de banco que vamos utilizar no arquivo knexfile 
const configuration = require('../../knexfile');

/** agora vanos criar a constante connection utilizando 
  *	o knex para conexão  recebendo por parametro a constante configuration
  *	na parte de development do arquivo knexfile
* */
const connection = knex(configuration.development);

/* exportando o module */
module.exports = connection;