require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express'); // Importa o framework Express
const app = express(); // Cria uma instância do Express
const mongoose = require('mongoose'); // Importa o Mongoose para interagir com o MongoDB
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e)); // Conecta ao MongoDB usando a string de conexão do arquivo .env

const session = require('express-session'); // session é um middleware para gerenciar sessões de usuário
const MongoStore = require('connect-mongo'); // MongoStore é um armazenamento de sessão baseado no MongoDB
const flash = require('connect-flash'); // flash é um middleware para mensagens de flash (notificações temporárias)

const routes = require('./routes'); // Importa as rotas definidas no arquivo routes.js
const path = require('path'); // Importa o módulo path para manipulação de caminhos de arquivos
const helmet = require('helmet'); // helmet é um middleware para proteger o aplicativo Express definindo vários cabeçalhos HTTP
const csurf = require('csurf'); // csurf é um middleware para proteção contra CSRF (Cross-Site Request Forgery)
const { middlewareGlobal, checkCsurfError, csrfMiddleware } = require('./src/middleware/middleware'); // Importa os middlewares globais definidos no arquivo middleware.js

app.use(helmet()); // Usa o helmet para proteger o aplicativo definindo cabeçalhos HTTP apropriados
app.use(express.urlencoded({ extended: true })); // Permite que o Express entenda dados de formulários (application/x-www-form-urlencoded)
app.use(express.json()); // Permite que o Express entenda JSON no corpo das requisições
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'teste*r#2sadf',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csurf())
app.use(middlewareGlobal);
app.use(checkCsurfError);
app.use(csrfMiddleware);
app.use(routes); // Usando o arquivo de rotas


app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});
