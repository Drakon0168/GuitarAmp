export let canvas;
let ctx;

export function init(){
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    
    resize();
}

export function update(){
    
}

export function draw(){
}

export function resize(){
    canvas.setAttribute("width", window.innerWidth);
    canvas.setAttribute("height", window.innerHeight);
}