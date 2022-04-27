let tela = document.querySelector('#tela');

let ctx = tela.getContext('2d');

ctx.beginPath();

ctx.lineWidth = 5;
ctx.strokeStyle = 'white';
ctx.moveTo(10, 10);
ctx.lineTo(250, 250);
ctx.stroke();

// começando uma nova linha
ctx.beginPath();

ctx.lineWidth = 12;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'white';
ctx.moveTo(50, 300);
ctx.lineTo(30, 30);
ctx.lineTo(150,400);
ctx.closePath();
ctx.stroke();
ctx.fill();