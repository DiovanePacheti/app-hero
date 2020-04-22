const connection = require('../database/connection');

module.exports = {

	async create(request, response){
		const {id} = request.body;//recebe o id enviado por post

		//conecta na tabela ongs no campo que id = id selecionando o campo name tras o primeiro
		const ong = await connection('ongs').where('id', id).select('name').first();

		if(!ong){//se nao houver este registro no banco 

			//retorna o status 400 que indica que houve erro e uma msg de erro json
			return response.status(400).json({error: 'No ONG found with this ID'});
		}//fim do if

		return response.json(ong);// retorna o name da ONG caso tudo ocorra certo
		
	}
}