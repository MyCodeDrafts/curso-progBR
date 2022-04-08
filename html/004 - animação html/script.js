let jogador = document.querySelector('#jogador');
let play = document.querySelector('.btn');
let pausar = document.querySelector('.btn2');




play.onclick = () => {
    

    let xInicial = 0;
    let yInicial = 0;
    
    function mover(x, y){
        let posX = x + "px";
        let posY = y + "px";
        jogador.style.top = posX;
        jogador.style.left = posY;
       
    }
    
    setInterval(function(){
        mover(xInicial++, yInicial++);
        
        
    }, 15);
    
    
}


