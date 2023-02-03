const { mongoose } = require("mongoose");

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ClienteSchema = new Schema({
    id: ObjectId,
    nome: String,
    telefone: String,
    email: String,
    endereco: String
})

const ClienteModel = mongoose.model('clientes', ClienteSchema)

module.exports = ClienteModel