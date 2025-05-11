const nome = 'Joaquim';
const sobrenome = 'Rufus';

const falaNome = () => `${nome} ${sobrenome}`;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.oThisApontaParaOModuleExports = 'o this aponta para o module exports';