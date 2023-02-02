//importar o router do express
const { Router } = require('express')
const ProductController = require('./controllers/ProductController')

//instanciar o objeto de rotas
const routes = Router()

//rota de testes
routes.get('/health', (req, res)=>{
    return res.status(200).json({message: 'Rotas funcionando'})
})


//ROTAS DE PRODUTOS
routes.post('/products', ProductController.store)
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)

module.exports = routes