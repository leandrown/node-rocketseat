const mongoose = require('mongoose');

// Definindo um Model (tabela) para o banco de dados
// Schema -> quais sao os campos que uma tabela do produto pode ter e que tipos de valores
// esses campos vão armazenar
const ProductSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   url: {
      type: String,
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

// Registrar o model na aplicacao
mongoose.model('Product', ProductSchema);
