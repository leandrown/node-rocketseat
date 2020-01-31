const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia o App
const app = express();
app.use(express.json());
app.use(cors()); // CORS permite a api ser acessada publicamente

// Inicia conexao com o Banco de Dados Mongo
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// Registra o model
requireDir('./src/models');

// Rotas
// O use eh como se fosse um wildcard (coringa)
// o use aceita TODAS as resquisicoes
app.use('/api', require('./src/routes'));

app.listen(3001);
