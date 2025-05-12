const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    req.session = { nome: 'Matheus', sobrenome: 'Silva' }
    console.log();
    console.log('Passe no seu middlerware');
    console.log();
    next();
}

// rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function (req, res, next) {
    console.log();
    console.log('Ainda estou aqui');
    console.log();
    console.log(`'ULTIMO MIDDLEWARE' Olha o que tem na req.session.nome ${req.session.nome}`);

});
route.post('/', homeController.trataPost);

// rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route; 