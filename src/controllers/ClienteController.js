const ClienteModel = require('../models/ClienteModels')

class ClienteController{

    async store(req, res){

        const { nome, telefone, email, endereco} = req.body

        if(!nome){

            res.status(422).json({message: 'O nome é obrigatório'})
            return
        }

        if(!email){

            res.status(422).json({message: 'O email é obrigatório'})
            return
        }

        if(!telefone){

            res.status(422).json({message: 'O telefone é obrigatório'})
            return
        }

        if(!endereco){

            res.status(422).json({message: 'O endereco é obrigatório'})
            return
        }

        

        const createdCliente = await ClienteModel.create(req.body)

        return res.status(200).json(createdCliente)

    }

    async index(){

    }

    async show(){

    }

    async update(){

    }

    async destroy(){

    }
}

module.exports = new ClienteController()