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

    async index(req, res){

        try{

            const clientes = await ClienteModel.find()

            return res.status(200).json(clientes)

        }catch(err){

            return res.status(200).json(err)

        }

    }

    async show(req, res){

        const { id } = req.params

        const cliente = await ClienteModel.findById(id)

        if(!cliente){

            res.status(404).json({message: 'Cliente não existe'})
            return;
        }

        return res.status(200).json(cliente)

    }

    async update(req, res){

        const { id } = req.params

        try{

            const cliente = await ClienteModel.findByIdAndUpdate(id, req.body)

            res.status(200).json(cliente)

        }catch(err){

            res.status(404).json({message: 'Cliente não existe'})
            return;

        }

      

    }

    async destroy(req, res){

        const { id } = req.params

        try{

            const cliente = await ClienteModel.findByIdAndDelete(id)

            if(!cliente){

                res.status(404).json({message: 'Cliente não existe'})
                return;

            }

            res.status(200).json({message: 'Cliente deletado com sucesso'})

        }catch(err){

            res.status(404).json({message: 'Cliente não existe'})
            return;

        }

    }
}

module.exports = new ClienteController()