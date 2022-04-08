/* 
video.currentTime -= 10; retrocede 10 segundos
video.currentTime += 10; avança 10 segundos


*/



let video = document.getElementById('video1');

function play (){
    video.play()

}

function diminui_vel() {
    video.playBackRate -= 0.1;
}


function aumenta_vel() {
    video.playbackRate += 0.1;

}


function stop() {
    video.pause()
    video.currentTime = 0;
}


