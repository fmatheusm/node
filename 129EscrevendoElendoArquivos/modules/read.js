const fs = require('fs').promises;// Importa o módulo fs (File System) do Node.js para manipulação de arquivos
// O método 'promises' permite usar promessas para operações assíncronas

module.exports = (caminho) => fs.readFile(caminho, 'utf-8');// Lê o arquivo e retorna os dados lidos
// O segundo parâmetro é a codificação do arquivo, que é 'utf-8' por padrão