const express = require('express');//atribuindo as funçoes do modulo express a constante
const crypto = require('crypto');//utilizando o modulo crypto do node para criar um ID 

const routes = express.Router();//atribuindo as funçoes de Router do modulo express a constante routes 

/*a constante app com o method GET recebe por parametro primeiro A rota no caso 
 *a rota esta no diretorio raiz '/' depois no segundo parametro sera passado 
  uma função */
routes.post('/ongs',(request, response) =>{

	//utilizando desestruturaçãos para obtem os dados enviados na requisição
	const {name, email, whatsapp, city, uf} = request.body;

	/** o id vai ser criptografado em um random de 4 bytes e retornar em uma hexadecimais*/
	const id = crypto.randomBytes(4).toString('HEX');


	return response.json();
});


module.exports = routes;