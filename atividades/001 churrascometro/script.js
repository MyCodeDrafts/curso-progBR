let inputAdultos = document.querySelector('.adultos');
let inputCriancas = document.querySelector('.criancas');
let inputDuracao = document.querySelector('.duracao');

let resultado = document.querySelector('.resultado');

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    
    let totalCerveja = cervejaPP(duracao) * adultos;
    console.log(totalCarne);
    
    
    let totalBebida = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    console.log(totalCarne);
    resultado.innerHTML = `<p>${Math.ceil(totalCarne / 1000)} kgs de carne / linguiça / frango.<p/>`;
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 355)} latas de cervejas / chopp.<p/>`;
    resultado.innerHTML += `<p>${Math.ceil(totalBebida / 1000)} litros de bebidas (refrigerante/suco/água).<p/>`;


}


function carnePP(duracao) { // Carne Por Pessoa
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) { // Carne Por Pessoa
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP (duracao) {
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}







/* 

Carne 400gr por pessoa + 6 horas - 650 gr

Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml

Refrigerante / Agua - 1000 ml por pessoa + 6 horas 1500 ml

crianças valem por 0.5


*/