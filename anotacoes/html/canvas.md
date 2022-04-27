# **Canvas**
É uma tela onde podemos desenhar nessa tela. Ex: criação de jogos, elementos visuais.

~~~html
    <canvas id="tela"></canvas>
~~~

Pode ser desenhado um linha, retângulos, circulos, quadrados etc.


## **Usando Canvas no JavaScript**


~~~javascript
let tela = document.querySelector('#tela');
~~~

Após pegar a tela, temos que pergar o contexto da tela, onde de fato vai ser feito o desenho: 
~~~javascript
let ctx = tela.getContext('2d');

/* 
2d é para desenhos mais simples
*/
~~~

### **Eixos**

**x** -> eixo horizontal

**y** -> eixo vertical


## **Desenhando Linhas**

**moveTo(x, y)** = move um ponto para um lugar específico,
**lineTo(x, y)** = adiciona uma linha ao path,
**stroke()** = 

~~~javascript
cxt.moveTo('x', 'y');
cxt.lineTo('x', 'y');
cxt.stroke();
~~~

O correto é definir o tamanho do contexto nos atributos ***width*** e ***heigth*** na tag 
~~~html
<canvas width="" height="">
~~~ 

## **Desenhando Retângulos**

**Retângulo preenchido:**
~~~javascript

ctx.fillStyle = " "; // Definindo a cor

ctx.fillRect('x', 'y',  'altura', 'largura');

~~~

**Retângulo só a borda**
~~~javascript
ctx.strokeStyle = " "; // Definindo a cor
ctx.strokeRect('x', 'y',  'altura', 'largura');
~~~

**Retângulo preenchido borda de outra cor**
~~~javascript
ctx.rect('x', 'y',  'altura', 'largura');
ctx.fillStyle = " "; // Cor do background
ctx.strokeStyle = " "; // Cor da borda
ctx.lineWidth = " "; // largura da linha

ctx.fill();
ctx.stroke();
~~~

**Limpando uma parte do retângulo**
~~~javascript
ctx.clearRect('x', 'y',  'altura', 'largura');
~~~

## **Começando um novo desenho na mesma tela**

Toda vez que o beginPath(), é usado, ele começa um novo desenho
~~~javascript
ctx.beginPath();
~~~
Senão for usado e começar um novo desenho, o js entende que ainda é o mesmo desenho

**Fechando um elemento**
Para fechar um elemento se usa o closePath().
~~~javascript
ctx.lineWidth = ;
ctx.strokeStyle = ' ';
ctx.fillStyle = ' ';
ctx.moveTo('x', 'y');
ctx.lineTo('x', 'y');
ctx.lineTo('x', 'y');
ctx.closePath(); // fecha o elemento
ctx.stroke();
ctx.fill();

~~~

## **Desenhando Círculos**
O inicio do círculo é em radianos.
~~~javascript
// ctx.arc('x', 'y', 'raio', 'angulo que comeca', 'angulo que termina');

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
~~~