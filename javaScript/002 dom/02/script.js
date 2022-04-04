function onOver (elemento) {
    
    elemento.style.backgroundColor = "red";
    elemento.style.width = "150px";
    elemento.style.borderRadius = "5px";
    

}

function onClick(elemento) {
    const teste = document.querySelector('#teste');
    const teste2 = document.querySelector('.teste2');
    const teste3 = document.querySelector('#teste3');
    
    elemento.style.color = "white";
    teste.style.display = "none";
    teste2.style.display= "block";
    teste3.style.display = "block";
   

    
}



function onOut (elemento) {
    elemento.style.backgroundColor = "cornflowerblue";
    elemento.style.color = "#1a1919";
    
    const teste = document.querySelector('#teste');
    const teste2 = document.querySelector('.teste2');
    const teste3 = document.querySelector('#teste3');
    
    teste.style.display = "block";
    teste2.style.display= "none";
    teste3.style.display = "none";
}


