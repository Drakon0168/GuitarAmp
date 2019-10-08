import * as audio from "./audio.js";
import * as graphics from "./graphics.js";
import * as UI from "./UI.js";

const timeStep = 10;

let updateInterval;

export let Time = Object.seal({
    currentTime: new Date(),
    lastTime: 0,
    deltaTime: 0
});

function init(){
    graphics.init();
    audio.init();
    UI.init();
    
    window.onresize = resize;
    updateInterval = window.setInterval(update, timeStep);
}

function update(){
    Time.currentTime = new Date();
    Time.deltaTime = (Time.currentTime.getTime() - Time.lastTime) / 1000;
    Time.lastTime = Time.currentTime.getTime();
    
    //Update screen objects
    graphics.update();
    audio.update();
    
    //Draw screen objects
    graphics.draw();
}

function resize(){
    graphics.resize();
}

window.onload = init;