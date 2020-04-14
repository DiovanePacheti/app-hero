/*Importando o modulo framework express
  para uma constante de mesmo nome
  npm install express*/
const express = require('express');

/** instanciando o arquivo routes na index*/
const routes = require('./routes');

const app = express();//atribuindo as funcões do express para a constante app

app.use(express.json());

/** 
 * Rota / Recurso
 */

 /** 
  * Metodos HTTP:
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUt: Alterar uma informação no back-end
  * DELETE: Deleta uma informação do back-end
  */

  /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota apos "?" (Filtros, paginação) exemplo(GET http://localhost:3333/user?name=Diovane)
  * Route Params: Parâmetros utilizados para identificar recursos exemplo (app.get('/users/:id', (request, response) =>{}))
  */

  /**
  * SQLite3 
  * Query Builder: usar codigo javascript exemplo (table('users').select('*').where())
  * vamos utilizar knex.js como query builder
  * npm install knex
  * npm install sqlite3
*/

//utilizando as rotas 
app.use(routes);

app.listen(3333);//a constante sera ouvida na porta 3333 