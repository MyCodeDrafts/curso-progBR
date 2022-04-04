function loaded() {
    const button = document.querySelector('#button');
    const teste = document.querySelector('#teste');
    const teste2 = document.querySelector('.teste2');
    const teste3 = document.querySelector('#teste3');

    button.addEventListener('click', click);
    button.addEventListener('mouseout', mouseOut);
    

    teste.addEventListener('click', click);
    teste2.addEventListener('click', click);
    teste2.addEventListener('mouseout', mouseOut);
    
    

}

function click () {
    this.style.color = "white";
    this.style.backgroundColor = "red";
    teste.style.display = "none";
    teste2.style.display = "block";

    
    
}

function mouseOut() {
    this.style.backgroundColor = "cornflowerblue";
    this.style.color = "#1a1919"
    teste.style.display = "block";
    teste2.style.display = "none";

}
