let tela = document.querySelector('#tela');

let ctx = tela.getContext('2d');

let circle = {
    x: 250,
    y: 250,

    raio: 100,

    inicio: 0,
    fim: 2 * Math.PI
}

function drawCircle(c) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.fillStyle = 'yellow';

    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);

    ctx.fill();
    ctx.stroke();
}


drawCircle(circle);