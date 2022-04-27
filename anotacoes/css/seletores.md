## **Seletores** 
**Seletores** primeira parte de uma regra **CSS**. É um padrão de elementos e outros termos que informam ao navegador quais elementos **HTML** devem ser selecionados para que os valores de propriedade **CSS** dentro da regra sejam aplicados a eles.

***Asterístico*** seleciona todos os elementos da página aplica estilo para todos 
~~~css
* {

}
~~~

**Selecionando mais de um elemento** para selecionarmos vários elementos utilizamos ","(virgula), para separar cada elemento, e os estilos serão aplicadas a todos eles.
~~~css
p, header, .container, #titulo {

}
~~~

**Selecionando elementos com " "(espaço)** os estilos serão aplicados em todas as tags que estão dentro da primeira.
~~~css
div p {

}
~~~
Nesse caso, em todos os parágrafos que estão na tag div.

**Tag pai**
Selecionando elementos com ">" serão aplicados estilos diretamente nos filhos da tag selecionado primeiro.
~~~css
div > p { 

}
~~~

Nesse exemplo o estilo seria aplicado somente no parágrafo dentro da div, o que está dentro de span, não é selecionado por não ser filho da div, e sim filho do span.
~~~html
<div>
    <p> teste </p>

    <section> 
        <p>teste</p> 
    </section>

</div>
~~~

**Primeiro elemento dentro da tag**
Selecionando elementos com "+", ele pega o primeiro elemento que está logo em seguida.
~~~css
div + p {

}
~~~

## **Atributo como seletor**
Define estilo para todos elementos que tem o atributo selecionado:

~~~html
<h1 width=''></h1>

<style>
  [width] {
  
  }
  
</style>
~~~
Para selecionar apenas os atributos com valores:
~~~css
[width="500"] {

}
~~~
Define estilos para todas as tags com atributo width e com 500 de valor

Para selecionar atributos com o mesma palavra:
~~~css
[title~="titulo"]
~~~

Para selecionar atributos com o mesma letra inicial:
~~~css
[title^="titulo"]
~~~