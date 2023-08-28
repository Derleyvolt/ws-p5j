import { CircularQueue } from '../dataStructure/circular_queue.js'

export let mouseX;
export let mouseY;

export let keysDown = new Set();
export let firePos  = new Map();

let circular_queue = new CircularQueue(10);

export function initMouseCapture(screenDim) {
    document.onmousemove = function(e) {
        let width  = screenDim[0];
        let height = screenDim[1];
        mouseX = e.pageX - width/2;
        mouseY = height/2  - e.pageY;
    }
}

document.onkeydown = function(e) {
    keysDown.add(e.key);
}

document.onkeyup = function(e) {
    keysDown.delete(e.key);
}

document.onclick = function(e) {
    circular_queue.push([e.clientX, e.clientY]);
}