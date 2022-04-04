

onload = function() {
    const nome = this.localStorage.getItem("nome");
    const h1 = this.document.getElementById('nome');
    h1.innerHTML = nome;
}





function atualizar(element) {
    const valor = element.value;
    console.log(valor);
    
    const h1 = document.getElementById('nome')
    h1.innerHTML = valor;
    
    localStorage.setItem("nome", valor);



}


