const aluno = {
    nome: 'João',
    notas: [7.5, 5.0]
};

const novaProp = "sobrenome";

console.log(aluno['notas'][1]); // acessar a propriedade e o índice do array

aluno.matricula = 123456; // colocando propriedade no objeto

/* aluno[novaProp] = 'Braz' */

aluno["sobrenome"] = 'Braz'; // criando direto

console.log(aluno);