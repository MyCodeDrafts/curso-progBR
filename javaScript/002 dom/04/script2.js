/* 
Acessando pai e filhos em JS
*/

// window.onload faz o carregamento da página
window.onload = function () {
    const h1 = document.getElementsByTagName('h1');
    console.log(h1);

    for (const h of h1) {
        console.log(h)
        h.addEventListener('click', pai);

        
    }

    function pai(e) {
        let  t = e.target;
        console.log(t.parentElement)

    }
    

    
}