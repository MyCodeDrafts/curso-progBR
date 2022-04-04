/* 
Outra forma de criar objeto com uma função
*/

function aluno(nome, n1, n2, n3, n4) {
    // variáveis
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.nota3 = n3;
    this.nota4 = n4;

    this.media = function() {
        return (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
    }
}

const a = new aluno('Juca', 8, 6.5, 6, 7.5);

console.log(`Aluno ${a.nome} com média ${a.media()}`);