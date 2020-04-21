const express = require('express');//atribuindo as funçoes do modulo express a constante
const OngController = require('./controllers/OngController'); 
const IncidentController = require('./controllers/IncidentController');
//abrindo conexão
const connection = require('./database/connection');
const routes = express.Router();//atribuindo as funçoes de Router do modulo express a constante routes 


/** Criando a rota que que vai listar os casos registrados na tabela ongs */
routes.get('/ongs', OngController.index );

routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);


module.exports = routes;