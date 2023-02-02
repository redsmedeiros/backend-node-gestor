//importar o framework de back
const express = require('express')
const routes = require('./routes')

//intanciar o express em uma aplicação e configurar o json
const app = express()
app.use(express.json())

//definir o arquivo de rotas
app.use(routes)

//exportar a aplicação
module.exports = app;