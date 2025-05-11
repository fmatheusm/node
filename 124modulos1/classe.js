class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'John';
const sobrenome = 'Snow';

// exports.Pessoa = Pessoa;

module.exports = {
    nome,
    sobrenome,
    Pessoa
}; // dessa maneira não é possível utilizar mais o exports pois estamos sobrescrevendo o objeto
