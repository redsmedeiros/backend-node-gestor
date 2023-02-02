//importar a aplicação de back
const app = require('./app')

//importar o loaders
const Loaders = require('./loaders/index')

Loaders.start();

//escutar a porta de back
app.listen(5000, ()=> console.log('Servidor Rodando'))