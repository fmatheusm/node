const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});

app.get('/testes/{:idUsuarios}', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

// app.get('/testes', (req, res) => {
//     console.log(req.query);
// });

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Nome recebido no formulário ${req.body.nome}`);
});

app.get('/contato', (req, res) => {
    res.send('Meu contato é 31999664422');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});