let tela = document.querySelector('#tela');


let ctx = tela.getContext('2d');

ctx.fillStyle = "black"
ctx.fillRect(0, 5, 100, 200);

ctx.beginPath();

ctx.strokeStyle = 'black';
ctx.lineWidth = 10;
ctx.strokeRect(110, 200, 100, 200);

ctx.beginPath();

ctx.rect(220, 5, 100, 200);
ctx.fillStyle = '#f87f0e'; // Cor background
ctx.strokeStyle = 'black'; // cor da borda
ctx.lineWidth = 5; // largura da linha
ctx.fill();
ctx.stroke();

ctx.beginPath();

ctx.fillStyle = "violet"
ctx.fillRect(340, 200, 100, 200);
ctx.clearRect(348, 250, 30, 30);

