//importar o arquivo de conexão
const startDB = require('./mongodb');
const mongoDB = require('./mongodb');

//criar uma classe de carregamentos
class Loaders{

    //metodo de conexão com o db
    start(){
        //chamar a função de startDB
        startDB();
    }
}

//exportar uma nova insntacia do objeto loaders para ja fazer rodar
module.exports = new Loaders();