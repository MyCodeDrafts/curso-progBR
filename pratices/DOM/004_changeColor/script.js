const btn = document.querySelector('button');

function random() {
    return Math.round(Math.random() * 255);
}


btn.onclick = function(){
    const cor = `rgb(${random()}, ${random()}, ${random()})`;
    
    


    document.body.style.backgroundColor = cor;
}







