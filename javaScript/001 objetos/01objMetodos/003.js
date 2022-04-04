/* 
usando this => é usado dentro do próprio objeto, a função só funciona quando está atribuída a propriedade de um objeto

*/


function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2;


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

console.log(aluno1.media());


console.log(aluno2.media());