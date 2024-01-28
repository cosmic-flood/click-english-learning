
console.log('videocontrol.js');

if(lakiVideoElements == undefined){
    let lakiVideoElements = document.getElementsByTagName('video');
}
console.log(lakiVideoElements);

let myvideo = lakiVideoElements[0];
myvideo.play();
myvideo.pause();
myvideo.currentTime = 4;
myvideo.play();
