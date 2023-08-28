import { Circle } from './geometry/circle.js'
import { EventManager } from './eventManager.js'
import * as input from './inputManager.js'

let width  = 600;
let height = 600;

const event = new EventManager();

input.initMouseCapture([width, height]);

const scene    = new THREE.Scene();
const camera   = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

let player = new Circle([200, 200, -1], 50, 2, 0xFFFFCC);

scene.add(player.getMesh());

event.on('walk forward', () => {
    const curPos = player.getPosition();
    player.setPosition([curPos.x, curPos.y+player.getVelocity(), curPos.z]);
});

event.on('walk left', () => {
    const curPos = player.getPosition();
    player.setPosition([curPos.x-player.getVelocity(), curPos.y, curPos.z]);
});

event.on('walk backwards', () => {
    const curPos = player.getPosition();
    player.setPosition([curPos.x, curPos.y-player.getVelocity(), curPos.z]);
});

event.on('walk right', () => {
    const curPos = player.getPosition();
    player.setPosition([curPos.x+player.getVelocity(), curPos.y, curPos.z]);
});

let animate = () => {
    requestAnimationFrame(animate);
    
    for(const e of input.keysDown) {
        switch(e) {
            case 'w': {
                event.emit('walk forward');
                break;
            }
            
            case 's': {
                event.emit('walk backwards');
                break;
            }

            case 'a': {
                event.emit('walk left');
                break;
            }

            case 'd': {
                event.emit('walk right');
                break;
            }

            default: {
                break;
            }
        }
    }

    renderer.render(scene, camera);
}

animate();