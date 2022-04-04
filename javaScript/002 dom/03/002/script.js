// Criando eventos direto no JavaScript

// Com addEventListener

function loaded() {
    const teste = document.querySelector('#titulo');
    
    // teste.onclick = mudarText;

    teste.addEventListener("click", mudarText);
    

    
}


function mudarText() {
    this.innerHTML = "teste2"; // Objeto que está executando onclick
    
}



