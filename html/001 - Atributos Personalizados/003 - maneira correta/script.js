// Usando dataset para obter o atributo criado


const lista = document.querySelector('.lista');

// Pegando o atributo e colocando valor nele
lista.dataset.num = 4;

const num = parseInt(lista.dataset.num);



let conteudo = "";

for(var i = 0; i < num; i ++) {
    conteudo += `<li> ${i} </li>`;
}

lista.innerHTML = conteudo;