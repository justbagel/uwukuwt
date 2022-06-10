function playMedia (id) {
    let media = document.getElementById(id);
    // console.log('media', media);
    if(media){
        if(media.paused){
            // console.log("paused");
            media.play();
        }
    }
}