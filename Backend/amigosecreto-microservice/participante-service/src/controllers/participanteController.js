const participanteRepository = require("../repositories/participanteRepository");

module.exports = {
    async create (request, response) {
        try {
            let { _id } = await participanteRepository.create(request.body);
            return response.json({
                "mensagem" : "Participante criado com sucesso",
                "status" : 200,
                "idParticipante" : _id
            });
        } catch (error) {
            return response.json({
                "mensagem" : "Erro " + error,
                "status" : 500,
                "idParticipante" : null
            });
        }
    },

    async edit (request, response) {
        try {
            let Participante = await participanteRepository.edit(request.body);
            return response.json({
                "mensagem" : "Participante alterado com sucesso",
                "status" : 200,
                "participante" : Participante
            });
        } catch (error) {
            return response.json({
                "mensagem" : "Erro " + error,
                "status" : 500,
                "idParticipante" : null
            });
        }
    },

    async delete (request, response) {

        let { id } = request.params;
        const participante = await participanteRepository.delete(id);
        return response.json({
            "mensagem" : "Participante deletado com sucesso",
            "status" : 200,
            "participante" : participante
        });
    },

    async getById (request, response) {
        let { id } = request.params;
        let Participante = await participanteRepository.getByid(id);

        if (Participante == null) {
            response.status(404);
            return response.json({
                "mensagem" : "Participante não encontrado",
                "status" : 404,
                "participante" : Participante
            });
        }

        return response.json({
            "mensagem" : "Participante encontrado com sucesso",
            "status" : 200,
            "participante" : Participante
        });
    }
}