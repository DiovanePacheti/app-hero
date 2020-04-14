/*Importando o modulo framework express
  para uma constante de mesmo nome
  npm install express*/
const express = require('express');

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
/*a constante app com o method GET recebe por parametro primeiro A rota no caso 
 *a rota esta no diretorio raiz '/' depois no segundo parametro sera passado 
  uma função */
app.post('/users',(request, response) =>{

	const corpo = request.body;
	
	console.log(corpo);
	return response.json({
		nome:'diovane',
		idade:34,
	});
});

app.listen(3333);//a constante sera ouvida na porta 3333 