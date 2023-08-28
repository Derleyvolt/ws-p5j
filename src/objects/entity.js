import { Circle } from "../client/geometry/circle";
import { health } from '../client/extends/health';

export class Entity {
    constructor(name, position, velocity, initialHealth) {
        this._circle = new Circle(position, 50, velocity, initial, 0xFFFFCCCC);
        this._name = name;

        Object.assign(this, health);

        this.setHealth(initialHealth);
    }

    getMesh() {
        return this._circle.getMesh();
    }

    getName() {
        return this._name;
    }
}