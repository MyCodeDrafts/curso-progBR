function calcMedia(nota1, nota2) {
    return (nota1 + nota2) / 2
}

const aluno1 = {
    nome: 'Johnny',
    notas: [5, 8],
    media: calcMedia


};


const aluno2 = {
    nome: 'João',
    notas: [7, 9],
    media: calcMedia
    
    


};

console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));
console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1]));