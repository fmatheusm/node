const fs = require('fs').promises;// Importa o módulo fs (File System) do Node.js para manipulação de arquivos
// O método 'promises' permite usar promessas para operações assíncronas

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf-8' });// Escreve os dados no arquivo
    // O segundo parâmetro é o conteúdo a ser escrito no arquivo
};