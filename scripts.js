const urukaBgm = document.getElementById("urukaBgm");
const playBgmButton = document.getElementById("playBgmButton");

function playMedia (id) {
    let media = document.getElementById(id);
    if(media){
        if(media.paused){
            media.play();
        }
    }
}

function playPauseBgm () {
    if(urukaBgm) {
        if(urukaBgm.paused){
            urukaBgm.play();
            localStorage.setItem("isPlaying", "true");
            playBgmButton.firstChild.classList.remove("bi-play-fill");
            playBgmButton.firstChild.classList.add("bi-pause-fill");
        } else {
            urukaBgm.pause();
            localStorage.setItem("isPlaying", "pause");
            playBgmButton.firstChild.classList.remove("bi-pause-fill");
            playBgmButton.firstChild.classList.add("bi-play-fill");
        }
    }
}

function bgmVolumeUp () {
    if(urukaBgm){
        if(urukaBgm.volume <= 0.9){
            urukaBgm.volume += 0.1;
        } else {
            urukaBgm.volume = 1;
        }
    }
}

function bgmVolumeDown () {
    if(urukaBgm){
        if(urukaBgm.volume >= 0.1){
            urukaBgm.volume -= 0.1;
        } else {
            urukaBgm.volume = 0;
        }
    }
}

window.onload = function(){
    if (localStorage.getItem("isPlaying") === "true"){
        urukaBgm.currentTime = parseFloat(localStorage.getItem("currentTime"));
        urukaBgm.volume = parseFloat(localStorage.getItem("volume"))
        urukaBgm.play();
        playBgmButton.firstChild.classList.remove("bi-play-fill");
        playBgmButton.firstChild.classList.add("bi-pause-fill");
    }
};

window.onunload = function(){
    if (localStorage.getItem("isPlaying") === "true"){
        localStorage.setItem("currentTime", urukaBgm.currentTime);
        localStorage.setItem("volume", urukaBgm.volume);
    }
    else {
        localStorage.setItem("currentTime", 0);
    }
}

