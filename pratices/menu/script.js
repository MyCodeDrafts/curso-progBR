const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

/* Adiciona evento click na const botaoMenu, e uma class list toggle na const menu chamando a class menu-lateral--ativo*/
botaoMenu.addEventListener('click', () => { 
   menu.classList.toggle('menu-lateral--ativo') 
   console.log('rwarw');
})