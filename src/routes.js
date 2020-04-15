const express = require('express');//atribuindo as funçoes do modulo express a constante

const routes = express.Router();//atribuindo as funçoes de Router do modulo express a constante routes 

/*a constante app com o method GET recebe por parametro primeiro A rota no caso 
 *a rota esta no diretorio raiz '/' depois no segundo parametro sera passado 
  uma função */
routes.post('/ongs',(request, response) =>{

	const {name, email, whatsapp, city, uf} = request.body;

	console.log(data);

	return response.json();
});


module.exports = routes;