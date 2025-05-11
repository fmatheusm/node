const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Ola</button>
        </form>
        `);
});

app.post('/', (req, res) => {
    res.send('Recebi o fomulário');
});

app.get('/contato', (req, res) => {
    res.send('Meu contato é 31999664422')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});