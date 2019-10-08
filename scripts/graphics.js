import * as audio from "./audio.js";

export let canvas;
let ctx;

const GRAPH_HEIGHT = 0.5;
let graphHeight;

export function init(){
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    
    resize();
}

export function update(){
    
}

export function draw(){
    clear();
    
    let stepSize = canvas.width / audio.NUM_SAMPLES;
    
    //Draw frequency data
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height * 0.5);
    for(let i in audio.frequencyData){
        ctx.lineTo(i * stepSize, (canvas.height * 0.5) - (graphHeight * (audio.frequencyData / 255)));
    }
    ctx.stroke();
    ctx.closePath();
}

export function resize(){
    canvas.setAttribute("width", window.innerWidth);
    canvas.setAttribute("height", window.innerHeight);
    
    graphHeight = canvas.height * GRAPH_HEIGHT;
}

function clear(){
    ctx.save();
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.restore();
}