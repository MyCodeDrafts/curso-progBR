/* 

Desafio 059
Crie um programa que leia DOIS VALORES e mostre um MENU na tela:
[1] somar
[2] multiplicar
[3] maior
[4] novos números
[5] sair
Seu programa deverá realizar a operação solicitada em cada caso.


*/

let firstNumber = document.getElementById('first-number');
let secondNumber = document.getElementById('second-number');
let result = document.querySelector('#result');

let sum = document.querySelector('.sum');
let multiply = document.querySelector('.multiply');
// let comparar = document.querySelector('.comparar');
let reset = 



    
    
sum.onclick = () => {
    let firstNum = Number(firstNumber.value);
    let secondNum = Number(secondNumber.value);
        
    let resultSum = firstNum + secondNum;
    
        
    result.innerHTML = `<p>${resultSum}</p>`;
        
        
    console.log('teste')
}

multiply.onclick = () => {
    let firstNum = Number(firstNumber.value);
    let secondNum = Number(secondNumber.value);
        
    let resultMultiply = firstNum * secondNum;
    
        
    result.innerHTML = `<p>${resultMultiply}</p>`;
        
        
    console.log('teste')
}
    