import { movable } from '../extends/movable.js'

export class Circle {
    constructor(position, radius, velocity, color) {
        this._radius   = radius;
        this._color    = color;

        Object.assign(this, movable);

        this._velocity = velocity;

        const geometry = new THREE.CircleGeometry(radius, 32);
        const material = new THREE.MeshBasicMaterial({ color }); 
        this._mesh     = new THREE.Mesh(geometry, material);

        this.setPosition(position);
    }

    getMesh() {
        return this._mesh;
    }

    getRadius() {
        return this._radius;
    }

    setRadius(radius) {
        this._radius = radius;
    }

    setVelocity(velocity) {
        this._velocity = velocity;
    }

    getVelocity() {
        return this._velocity;
    }
}

// let circ = new Circle([0, 1, -1], 100, 2, 0xFFFFFFFF);

// circ.setPosition([1, 2, 3]);

// console.log(circ.getPosition());
//console.log(Object.values(movable));