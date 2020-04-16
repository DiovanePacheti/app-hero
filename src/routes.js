const express = require('express');//atribuindo as funçoes do modulo express a constante
const crypto = require('crypto');//utilizando o modulo crypto do node para criar um ID 
//abrindo conexão
const connection = require('./database/connection');
const routes = express.Router();//atribuindo as funçoes de Router do modulo express a constante routes 


/** Criando a rota que que vai listar os casos registrados na tabela ongs */
routes.get('/ongs', async (request, response) => {

	//const ongs recebe esperando a conexão e na tabela ongs seleciona todu
	const ongs = await connection('ongs').select('*');

	console.log(ongs);

	//retornando a resposta 
	return response.json(ongs);
});

/*a constante app com o method GET recebe por parametro primeiro A rota no caso 
 *a rota esta no diretorio raiz '/' depois no segundo parametro sera passado 
  uma função */
routes.post('/ongs', async (request, response) =>{//tornando a função assincrona async

	//utilizando desestruturaçãos para obtem os dados enviados na requisição
	const {name, email, whatsapp, city, uf} = request.body;

	/** o id vai ser gerado no formato criptografado em um random de 4 bytes e retornar em uma hexadecimais*/
	const id = crypto.randomBytes(4).toString('HEX');

	/* conectar e inserir na tabela ongs os dados*/
	await connection('ongs').insert({//inserindo um objeto 
		id,
		name,
		email,
		whatsapp,
		city,
		uf,
	})

	return response.json({ id });//vamos retornar o id da ongs cadastrada para que ela possa logar 
});


module.exports = routes;