const connection = require('../database/connection');//abrindo connection
const crypto = require('crypto');//utilizando o modulo crypto do node para criar um ID

module.exports ={
	//Lista ongs cradastrada
	async index(request, response){

		//const ongs recebe esperando a conexão e na tabela ongs seleciona todu
		const ongs = await connection('ongs').select('*');

		//retornando a resposta 
		return response.json(ongs);
	},

	async create(request, response){//tornando a função assincrona async

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
	}
};