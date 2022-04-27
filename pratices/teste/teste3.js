let firstNumber = document.querySelector('#num1');
let secondNumber = document.querySelector('#num2');
let button = document.querySelector('#somar');
let resultado = document.querySelector('#resultado');

button.addEventListener('click', clicar);


function clicar(e) {

    let num1 = Number(firstNumber.value);
    let num2 = Number(secondNumber.value);

    sum = num1 + num2;
    
    resultado.innerHTML = `<p class="paragrafo"> A soma entre <i>${num1}</i> e <i>${num2}</i> é <i>${sum}</i></p>`;

    e.preventDefault();

    

}
