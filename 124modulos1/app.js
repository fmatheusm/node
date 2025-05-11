// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

const { nome, sobrenome, falaNome } = require('./mod1');
console.log(falaNome());
console.log(nome);
console.log(sobrenome);

const { Pessoa } = require('./classe');
const p1 = new Pessoa('Matheus');
console.log(Pessoa);

const path = require('path');
const axios = require('axios');

axios('http://127.0.0.1:5500/public/index.html')
    .then(response => console.log(response))
    .catch(e => console.log(e));