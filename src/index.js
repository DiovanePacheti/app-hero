/*Importando o modulo framework express
  para uma constante de mesmo nome
  npm install express*/
const express = require('express');

/** instanciando o arquivo routes na index*/
const routes = require('./routes');

const app = express();//atribuindo as funcões do express para a constante app

app.use(express.json());

//utilizando as rotas 
app.use(routes);

app.listen(3333);//a constante sera ouvida na porta 3333 