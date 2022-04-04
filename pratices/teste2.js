function calcMedia() {
    return (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) / 4;
}




const alunos = {
    aluno1: {
        nome: 'João',
        notas: [7, 9.5, 6, 6.5],
        media: calcMedia
    },
    
    aluno2: {
        nome: 'Carlos',
        notas: [5.5, 7.5, 6, 9.5],
        media: calcMedia
    },
    
    aluno3: {
        nome: 'Raissa',
        notas: [8, 7, 6.5, 5.5],
        media: calcMedia
    }
    
    
};

for (const mediaFinal of alunos) {
    console.log(`o aluno(a) ${aluno1.nome} ficou com ${alunos.aluno1.media()}`);
    
}