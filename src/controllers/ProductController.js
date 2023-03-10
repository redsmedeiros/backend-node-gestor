//importar o modelo da tabela
const ProductModel = require('../models/ProductModel')

//criar a classe do controller
class ProductController{

    //metodo de criar um produto
    async store(req, res){

        //receber do corpo da requisição as variaveis vindas do form
        const {name, description, price, stock} = req.body

        if(!name){
            res.status(422).json({message: 'Nome do produto é obrigatório'})
            return
        }

        if(!description){
            res.status(422).json({message: 'Descrição é obrigatória'})
            return
        }

        if(!price){
            res.status(422).json({message: 'Valor é obrigatório'})
            return
        }

        if(!stock){
            res.status(422).json({message: 'Quantidade é obrigatória'})
        }

        //verificar se esse nome já está cadastrado
        const productExist = await ProductModel.findOne({name: name})

        if(productExist){

            res.status(422).json({message: 'Produto já registrado'})
        }

        //metodo do model para criar um produto no banco
        const createdProduct = await ProductModel.create(req.body);

        //retornar a resposta
        return res.status(200).json(createdProduct)

    }

    //metodo para listar todos os produtos
    async index(req, res){

        try{

            const products = await ProductModel.find()

            return res.status(200).json(products)

        }catch(err){

            return res.status(404).json({message: 'Não encontrado'})

        }

    }

    //metodo para listar um produto especifico
    async show(req, res){

        //receber a variavel que vem dos param da req
        const { id } = req.params

        try{

            const product = await ProductModel.findById(id)

            //verificar se veio um produto
            if(!product){

                return res.status(404).json({message: 'Não encontrado'})
            }

            return res.status(200).json({product})

        }catch(err){

            return res.status(404).json({message: err})


        }

    }

    //metodo para atualizar um produto
    async update(req, res){

        //pegar o id do produto a ser atualizado
        const { id } = req.params

        try{
             //buscar por id e atualizar
            await ProductModel.findByIdAndUpdate(id, req.body)

            return res.status(200).json({message: 'Produto atualizado'})

        }catch(err){

            return res.status(404).json({message: err})

        }

    }

    //metodo para deletar o produto
    async destroy(req, res){

        try{

            const { id } = req.params

            const productDeleted = await ProductModel.findByIdAndDelete(id)

            if(!productDeleted){

                return res.status(404).json({message: 'Produto não existe'})
            }

            return res.status(200).json({message: 'Produto deletado'})

       }catch(err){

            return res.status(404).json({message: 'Falha ao atualizar produtos' + err})

       }

    



    }
}

//exportar uma instancia da classe
module.exports = new ProductController();