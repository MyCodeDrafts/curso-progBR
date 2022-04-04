/* 
Métodos (Funções) dentro de objetos
*/


/*  

Propriedades: nome e nota,
Métodos: média
*/
const aluno = {
    nome: 'Johnny',
    notas: [5, 8],
    media: function(n1, n2) {

    return (n1 + n2) / 2
    
    }


};


/* 
aluno.media(aluno.notas[0], aluno.notas[1])
Aqui passa os parâmtetros para a função de acordo com o array do objeto
*/
console.log(`A média do ${aluno.nome} é ${aluno.media(aluno.notas[0], aluno.notas[1])}`);