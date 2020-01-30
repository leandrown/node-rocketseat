const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia o App
const app = express();

// Inicia conexao com o Banco de Dados Mongo
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// Registra o model
requireDir('./src/models');

// Rotas
// O use eh como se fosse um wildcard (coringa)
// o use aceita TODAS as resquisicoes
app.use('/api', require('./src/routes'));

app.listen(3001);
