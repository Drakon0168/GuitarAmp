let audio;
let ctx;

let gainNode;

export function init(){
    audio = document.querySelector("audio");
    ctx = new AudioContext();
    
    navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(function(stream){
        if(window.URL){
            audio.srcObject = stream;
        }
        else{
            audio.src = stream;
        }
    });
    
    let sourceNode = ctx.createMediaElementSource(audio);
    
    gainNode = ctx.createGain();
    gainNode.gain.value = 1;
    
    sourceNode.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    ctx.resume();
    //audio.play();
    
    console.log(ctx);
}

export function update(){
    
}

export function togglePlay(e){
    // check if context is in suspended state (autoplay policy)
    if (ctx.state == "suspended") {
        ctx.resume();
    }
    
    if (e.target.dataset.playing == "no") {
        audio.play();
        //e.target.dataset.playing = "yes";
        //e.target.innerHTML = "Pause";
    // if track is playing pause it
    } else if (e.target.dataset.playing == "yes") {
        audio.pause();
        e.target.dataset.playing = "no";
        e.target.innerHTML = "Play";
    }
}