const lista = document.querySelector('.lista');

//                         obtendo atributo
const num = parseInt(lista.getAttribute("num"));

let conteudo = "";




for (let i = 0; i < num; i++) {
    conteudo += `<li> ${i} </li>`;

    
}

lista.innerHTML = conteudo;