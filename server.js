const express = require('express');
const mongoose = require('mongoose');

// Inicia o App
const app = express();

// Inicia conexao com o Banco de Dados Mongo
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// Primeira rota definida
app.get('/', (request, response) => {
   response.send('Hello Rocketseat');
});

app.listen(3001);
