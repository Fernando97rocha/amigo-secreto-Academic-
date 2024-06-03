const { ObjectId } = require('mongodb');
const Participante = require('../Models/participante');

module.exports = {
    async create (participante) {
        try{
            let { nome, cpf, email, senha } = participante;
            const criaParticipante = await Participante.create({
                nome,
                cpf,
                email,
                senha
            });
            return criaParticipante;
        } catch (error) {
            console.log("Erro " + error);
        }
        return null;
    },

    async edit (participante) {
        try {
            let { _id , nome, cpf, email, senha } = participante;
            const retornaParticipante = await Participante.updateOne(
                { _id : _id }, {$set : { nome, cpf, email, senha }}
            );
            return retornaParticipante;
        } catch (error) {
            console.log("Erro " + error);
        }
        return null;
    },

    async getByid (_id) {
        const retornaParticipante = await Participante.find({ _id });
        return retornaParticipante;
        
    },

    async delete (_id) {
        try {
            const retornaParticipante = await Participante.deleteOne({ _id : _id });
            return retornaParticipante;
        } catch (error) {
            console.log("Error " + error);
        }
        return null;
    }
}