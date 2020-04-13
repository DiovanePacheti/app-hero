/*Importando o modulo framework express
  para uma constante de mesmo nome
  npm install express*/
const express = require('express');

const app = express();//atribuindo as funcões do express para a constante app

/*a constante app com o method GET recebe por parametro primeiro A rota no caso 
 *a rota esta no diretorio raiz '/' depois no segundo parametro sera passado 
  uma função */
app.get('/',(request, response) =>{
	return response.json({
		nome:'diovane',
		idade:34,
	});
});

app.listen(3333);//a constante sera ouvida na porta 3333 