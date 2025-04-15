require('dotenv').config();
const PORTA = 5001;
const URL_BANCO_DE_DADOS = process.env.URL_BANCO_DE_DADOS || 'mongodb://mongo/tarefas';

// Importando bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Criando o servidor web
const app = express();

// Configurando o servidor web
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conecta os controllers
app.use('/tarefas', require('./controllers/tarefa_controller'));

// Conectando ao banco de dados com tratamento de erros
console.log('Conectando ao banco de dados...');
mongoose.connect(URL_BANCO_DE_DADOS, {
  serverSelectionTimeoutMS: 5000, // Tempo antes de falhar
  socketTimeoutMS: 45000 // Tempo para operações
})
.then(() => {
  console.log('Conectado ao banco de dados com sucesso!');
  // Iniciando o servidor web
  console.log('Iniciando o servidor web...');
  app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
  });
})
.catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
  process.exit(1); // Encerra o processo com erro
});