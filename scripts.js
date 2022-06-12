function playMedia (id) {
    let media = document.getElementById(id);
    if(media){
        if(media.paused){
            media.play();
        }
    }
}