# **Canvas**
É uma tela onde podemos desenhar nessa tela. Ex: criação de jogos, elementos visuais.

~~~html
    <canvas id="tela"></canvas>
~~~

Pode ser desenhado um linha, retângulos, circulos, quadrados etc.


## **Usando Canvas no JavaScrip**

~~~javascript
let tela = document.querySelector('#tela');


~~~

Após pegar a tela, temos que pergar o contexto da tela, onde de fato vai ser feito o desenho: 
~~~javascript
let cxt = tela.getContext('2d');

/* 
2d é para desenhos mais simples
*/

~~~
**x** -> eixo horizontal
**y** -> eixo vertical

**moveTo(x, y)** = move um ponto para um lugar específico,
**lineTo(x, y)** = adiciona uma linha ao path
**stroke()** = 