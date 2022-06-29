function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoaOne = {
    nome: 'Daniel',
    idade: 21,
}

const pessoaTwo = {
    nome: 'Derick',
    idade: 13,
}

const animal = {
    nome: 'Duda',
    idade: '11',
    raça: 'Viralata',
};

// console.log(calculaIdade.call(animal, 5));
console.log(calculaIdade.apply(pessoaOne, [10]));