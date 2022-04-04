const numeroUsuario = 4;

const numeroComputador = Math.round(Math.random() * 10);


console.log(`Número escolhido: ${numeroUsuario}, Número sorteado ${numeroComputador}`);

if (numeroComputador === numeroUsuario) {
    console.log('Acertou');
    
}else {
    console.log('Errou');
}