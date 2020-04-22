/**
Rota do perfil de uma Ong

*/
const connection = require('../database/connection');

module.exports = {
	/**esse method get vai retornar os dados de uma unica ong a que estiver logada*/
	async index(request, response){
		const ong_id = request.headers.authorization;//recuperando o id da ong logada

		/** selecionar todos o incidents do id recuperado*/
		const incident = await connection('incidents').where('ong_id',ong_id).select('*');

		return response.json(incident);

	}
};