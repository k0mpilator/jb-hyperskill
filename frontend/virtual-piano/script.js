const keyValue = ['KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyW','KeyE','KeyT','KeyY','KeyU'];

document.addEventListener("keydown", function (e) {
    if (keyValue.includes(e.code)) {
        console.log('The \'' + e.code.replace('Key','') + '\' key is pressed.');
        new  Audio('sounds/' + e.code.replace('Key','') +'.mp3').play()
            .then()
            .catch();
    } else {
       console.log('Wrong key is pressed.');
    }
});