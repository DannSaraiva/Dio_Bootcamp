const alunos = [{
        nome: 'Daniel',
        nota: 6,
        turma: '1A',
    },
    {
        nome: 'Derick',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Felipe',
        nota: 9,
        turma: '2C',
    }
];

function alunoAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];


        if (arr[i].nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;

}

console.log(alunoAprovados(alunos, 5));