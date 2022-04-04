/* 
Acessando pai e filhos em JS
*/

// window.onload faz o carregamento da página
window.onload = function () {

    let d1 = document.getElementById('d1');

    //.children cria um array com os elementos filhos da tag, e depois só buscar o índice do array
    let h1 = d1.children[0];
    let p = d1.children[1];
    console.log(h1);
    console.log(p);
}