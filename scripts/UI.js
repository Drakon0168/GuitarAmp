import * as audio from "./audio.js";

export let volume = Object.seal({
    slider: 0,
    label: 0,
    value: 1,
});

let playButton;

export function init(){
    volume.slider = document.querySelector("#volumeSlider");
    volume.label = document.querySelector("#volumeLabel");
    volume.slider.addEventListener('input', volumeChanged);
    
    playButton = document.querySelector("#playButton");
    playButton.onclick = audio.togglePlay;
}

function volumeChanged(e){
    volume.label.innerHTML = e.target.value;
    volume.value = e.target.value / 100;
    console.log(volume.value);
    audio.setVolume(volume.value);
}