## ***Pseudo Classes***

Especifica um estado especial do elemento selecionado. Por exemplo, ***:hover*** pode ser usado para alterar a cor de um botão quando o usuário passar o cursor sobre ele.

**Sintaxe**

~~~css
seletor:pseudo-classe {
  propriedade: valor;
}
~~~

**:focus** é aplicada quando um elemento recebe foco, o que pode ocorrer quando o usuário seleciona o elemento utilizando o teclado ou ativando o mesmo com o mouse (ex: um campo de um formulário).

~~~css
elemento:focus {

}
~~~
**:first-child** epresenta qualquer elemento que seja o primeiro filho de seus pais.

~~~css
elemento:first-child {

}
~~~

**:first-of-type** representa o primeiro elemento de seu tipo entre os filhos de seu elemento pai.

~~~css
elemento:first-of-type {

}
~~~

**nth-child()** escolhe qual filho vai receber os estilos

~~~css
elemento:nth-child() {

}
~~~

**:nth-last-child()** seleciona do ultimo até o primeiro, 

~~~css
elemento:nth-last-child() {

}
~~~