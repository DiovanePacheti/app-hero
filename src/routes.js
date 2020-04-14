const express = require('express');//atribuindo as funçoes do modulo express a constante

const routes = express.Router();//atribuindo as funçoes de Router do modulo express a constante routes 

/*a constante app com o method GET recebe por parametro primeiro A rota no caso 
 *a rota esta no diretorio raiz '/' depois no segundo parametro sera passado 
  uma função */
routes.post('/users',(request, response) =>{

	const corpo = request.body;
	
	console.log(corpo);
	return response.json({
		nome:'diovane',
		idade:34,
	});
});

module.exports = routes;