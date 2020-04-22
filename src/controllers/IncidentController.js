const connection = require('../database/connection');
module.exports = {

	async create(request, response){

		//recebendo o dados vindo do corpo da requisição
		const {title, description, value} = request.body;

		//recebendo o id pelo cabeçalho da request
		const ong_id = request.headers.authorization;

		//recebe por desestruturação o id do caso inserido
		const [id] = await connection('incidents').insert({
			title,
			description,
			value,
			ong_id
		});

		return response.json({id});//retornando o response no formato json 
	},

	async index(request, response){

		//recuperando o total de registro de incidents no banco 
		const [count] = await connection('incidents').count();

		console.log(count);

		//Criando Paginação

		const {page = 1} = request.query;// recebe por parametro page caso nã exista por padrão recebe 1 {page = 1} 

		//abre a conexao e na tabela incidents seleciona tudo
		const incidents = await connection('incidents')
			.join('ongs', 'ongs.id', '=', 'incidents.ong_id')
			.limit(5)
			.offset((page - 1) * 5)
			.select(['incidents.*',
					 'ongs.name',
					 'ongs.email',
					 'ongs.whatsapp',
					 'ongs.city',
					 'ongs.uf']);

		//recebe no cabeçalho do response o total de incidents	
		response.header('X-Total-Count', count['count(*)']);
			
		return response.json(incidents);//retorna o incidents que é um objeto
	},

	async delete(request, response){

		const {id} = request.params;//recebendo apenas o id pela desestruturação

		//recebendo o id pelo cabeçalho da request
		const ong_id = request.headers.authorization;

		/** bloco que vai verificar se a ong que quer deletar um incidents
			criou este incident */

	//recebe o incident da tabela incidents onde id = id seleciona o campo ong_id deste incients o primeiro	
		const incident = await connection('incidents').where('id',id).select('ong_id').first();	

		if(incident.ong_id !== ong_id){//se os IDs não forem iguais 

			// retorna o status 401 - de operação nao permitida
			return response.status(401).json({ erros: 'Operação invalida'});
		}

		//conectar a tabela incidents onde id =id e delete 
		await connection('incidents').where('id', id).delete()

		//retorna o status 204 que e uma resposta sem conteudo e usamos o send() pra enviar  
		return response.status(204).send();

	}

};