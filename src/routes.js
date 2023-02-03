//importar o router do express
const { Router } = require('express')
const ProductController = require('./controllers/ProductController')
const ClienteController = require('./controllers/ClienteController')

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
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)

//ROTAS DE CLIENTES
routes.post('/clientes', ClienteController.store)
routes.get('/clientes', ClienteController.index)
routes.get('/clientes/:id', ClienteController.show)
routes.put('/clientes/:id', ClienteController.update)
routes.delete('/clientes/:id', ClienteController.destroy)

module.exports = routes