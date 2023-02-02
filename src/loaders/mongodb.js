//importar o mongoose
const mongoose = require('mongoose')

async function startDB(){

     //criar uma metodo await de conexao
     mongoose.set("strictQuery", true);
     await mongoose.connect('mongodb://127.0.0.1:27017/pequenoGestor')
 
     console.log('Conectado ao MONGO')
}

startDB().catch((err) =>{ console.log(err)})


module.exports = startDB;