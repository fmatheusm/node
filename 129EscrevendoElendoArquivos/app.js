const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'texto.json');
const escrever = require('./modules/write');
const ler = require('./modules/read'); // Importa a função de leitura

const pessoa = [
    { nome: 'Lucas', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'João', idade: 22 },
    { nome: 'Ana', idade: 28 }
]

const json = JSON.stringify(pessoa, null, 2); // Converte o objeto para JSON com formatação de 2 espaços
// O segundo parâmetro é o número de espaços para formatação
escrever(caminhoArquivo, json);

async function lerArquivo(caminho) {
    const dados = await ler(caminho); // Lê o arquivo e aguarda a resposta
    // return dados; // Retorna os dados lidos
    renderizaDados(dados); // Chama a função para renderizar os dados
}

// const dadosArquivo = lerArquivo(caminhoArquivo).then(dados => console.log(dados)); // Chama a função para ler o arquivo// Exibe os dados lidos

function renderizaDados(dados) {
    dados = JSON.parse(dados); // Renderiza os dados lidos
    dados.forEach(val => console.log(val)); // Exibe os dados lidos
}

lerArquivo(caminhoArquivo); // Chama a função para ler o arquivo