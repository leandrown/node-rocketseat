const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia o App
const app = express();

// Inicia conexao com o Banco de Dados Mongo
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// Registra o model
requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira rota definida
app.get('/', (request, response) => {
   Product.create({
      title: 'React Native',
      description: 'Build native apps with React',
      url: 'https://github.com/facebook/react-native'
   });

   return response.send('Hello Rocketseat');
});

app.listen(3001);
