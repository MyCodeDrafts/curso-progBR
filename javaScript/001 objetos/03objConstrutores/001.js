function criarAluno(nome, n1, n2, n3, n4) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        nota3: n3,
        nota4: n4,
        media: function () {
            return (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4
        }
    }
}

var turma = [
    criarAluno('Igor', 9, 6, 5, 7),
    criarAluno('Juca', 6, 8, 9, 6),
    criarAluno('Rubens', 6.5, 7.5, 8, 4)
];

/* console.log(turma[0], turma[1], turma[2]); */

/* turma.forEach(element => { // element é cada vez que é passado dentro do array, são os elements

    console.log(element);
    
}); */

const aluno = turma[2];

for (const aluno of turma) {
    console.log(`O aluno ${aluno.nome} ficom com média ${aluno.media()}`)
    
}