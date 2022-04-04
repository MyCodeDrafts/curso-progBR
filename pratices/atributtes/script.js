// teste

const btn = document.querySelector('.btn');

const lista = document.querySelector('.teste');

const num = parseInt(lista.getAttribute("num"));

let conteudo = "";


btn.onclick = () => {

for (let i = 0; i < num; i++) {
    conteudo += `<li> ${i} </li>`;
}

lista.innerHTML = conteudo;
}






