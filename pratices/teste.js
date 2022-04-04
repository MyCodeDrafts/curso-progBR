function calcMedia() {
    return (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) / 4;
}




const aluno1 = {
    nome: 'João',
    notas: [7, 9.5, 6, 6.5],
    media: calcMedia
};

const aluno2 = {
    nome: 'Carlos',
    notas: [5.5, 7.5, 6, 9.5],
    media: calcMedia
};

const aluno3 = {
    nome: 'Raissa',
    notas: [8, 7, 6.5, 5.5],
    media: calcMedia
};

const aluno4 = {
    nome: 'Juca',
    notas: [10, 7.5, 6, 9.5],
    media: calcMedia
};

const aluno5 = {
    nome: 'Maria',
    notas: [9, 3.5, 8, 7.5],
    media: calcMedia
};

const aluno6 = {
    nome: 'Aline',
    notas: [5, 7, 6, 9.5],
    media: calcMedia
};

const aluno7 = {
    nome: 'Roberto',
    notas: [10, 5.5, 5, 9.5],
    media: calcMedia
};


console.log(`O Aluno ${aluno1.nome} ficou com ${aluno1.media().toFixed(1)} de média`);
console.log("___________________________________________");
console.log(`O Aluno ${aluno2.nome} ficou com ${aluno2.media().toFixed(1)} de média`);
console.log("___________________________________________");
console.log(`O Aluno ${aluno3.nome} ficou com ${aluno3.media().toFixed(1)} de média`);
console.log("___________________________________________");
console.log(`O Aluno ${aluno4.nome} ficou com ${aluno4.media().toFixed(1)} de média`);
console.log("___________________________________________");
console.log(`O Aluno ${aluno5.nome} ficou com ${aluno5.media().toFixed(1)} de média`);
console.log("___________________________________________");
console.log(`O Aluno ${aluno6.nome} ficou com ${aluno6.media().toFixed(1)} de média`);
console.log("___________________________________________");
console.log(`O Aluno ${aluno7.nome} ficou com ${aluno7.media().toFixed(1)} de média`);