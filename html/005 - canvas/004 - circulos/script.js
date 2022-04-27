let tela = document.querySelector('#tela');

let ctx = tela.getContext('2d');

let x = 250;
let y = 250;

let raio = 100;

let inicio = 0;
let fim = 2 * Math.PI;

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.fillStyle = 'yellow';

ctx.arc(x, y, raio, inicio, fim);

ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.fillStyle = 'violet';

ctx.arc(70, 70, 50, 30, 150);

ctx.fill();
ctx.stroke();
