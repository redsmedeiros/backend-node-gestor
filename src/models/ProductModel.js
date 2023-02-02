const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//criar um schema que vai gerar uma tabela no db
const ProductSchema = new Schema({
    id: ObjectId,
    name: String,
    description: String,
    price: Number,
    stock: Number
})

//criar o model com o nome da tabela e o schema
const ProductModel = mongoose.model('products', ProductSchema)

//exportar a modelagem da tabela
module.exports = ProductModel;