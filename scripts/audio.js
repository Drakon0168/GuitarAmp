const MAX_GAIN = 2;

let audio;
let ctx;

let analyserNode;

export const NUM_SAMPLES = 256;

export let frequencyData = new Uint8Array(NUM_SAMPLES / 2);
export let waveData = new Uint8Array(NUM_SAMPLES / 2);

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
    
    analyserNode = ctx.createAnalyser();
    analyserNode.fftSize = NUM_SAMPLES;
    
    
    sourceNode.connect(analyserNode);
    analyserNode.connect(ctx.destination);
}

export function update(){
    analyserNode.getByteFrequencyData(frequencyData);
    analyserNode.getByteTimeDomainData(waveData);
}

export function togglePlay(e){
    // check if context is in suspended state (autoplay policy)
    if (ctx.state == "suspended") {
        ctx.resume();
    }
    
    if (e.target.dataset.playing == "no") {
        audio.play();
        e.target.dataset.playing = "yes";
        e.target.innerHTML = "Mute";
    // if track is playing pause it
    } else if (e.target.dataset.playing == "yes") {
        audio.pause();
        e.target.dataset.playing = "no";
        e.target.innerHTML = "UnMute";
    }
}

export function setVolume(value){
    audio.volume = value;
}