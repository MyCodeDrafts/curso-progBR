## **Pseudo Elementos**


### **Sintaxe**
~~~css
seletor::pseudo-elemento {
  propriedade: valor;
}
~~~


**::first-line** aplica estilo apenas na primeira linha do paragráfo, não importando o tamanho do elemento (p), ele aplica os estilos automático.
~~~css
p::first-line {

}
~~~


**::firs-letter** aplica estilo apenas na primeira letra de um elemento.
~~~css
::first-letter {

}
~~~
**::before**
Permite que coloque um conteúdo antes do elemento
~~~css
::before {

}
~~~

**Colocando imagens em ::before**
~~~css
::before {
content: ''; /* conteúdo vázio */
width: ;
height: ;
background-image: url();
background-repeat: no-repeat;
background-position: center;
background-position: cover;
}
~~~

**::after**
Aplica os mesmos estilos que o ::before depois do elemento.

**::selection** define um estilo a um texto quando for selecionado na página
~~~css
::selection{

}
~~~




