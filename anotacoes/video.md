## **Vídeo em HTML**

`<video src="endereço-do-video"> </video>`


***Atributos***


**controls** = aparece os botões no vídeo

**loop** = o vídeo inicia toda vez que acaba

**preload** = *auto*: faz com  que o vídeo carregue na memória do navegador;

*none*: só carrega quando o usuário der o play
metadata: só carrega os dados do arquivo

***Botões em Javascript***
> Colocar imagens dos botoes e criar um ***onclick*** para cada um

> Criar uma ***function*** para cada imagem



## **Video em JavaScript**

~~~javascript

let video = document.getElementById('video1');

function play (){
    video.play()

}

function diminui_vel() {  
    video.playbackRate -= 0.1;  
}


function aumenta_vel() {  
    video.playbackRate += 0.1;  

}


function stop() {  
    video.pause()  
    video.currentTime = 0;  
}

~~~
