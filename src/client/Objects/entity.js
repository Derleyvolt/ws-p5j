const Movable = {
    _position: [0, 0],
    _velocity: 0,

    getPosition() {
        return this._position;
    },

    setPosition(position) {
        this._position = position;
    },

    getVelocity() {
        return this._velocity;
    },

    setVelocity(velocity) {
        this._velocity = velocity;
    }
}

const Health = {
    _health: 0,

    getHealth() {
        return this._health;
    },

    setHealth(health) {
        this._health = health;
    }
}

class Entity {
    constructor(position, velocity, radius, health, name) {
        this._velocity = velocity;
        this._position = position;
        this._health   = health;
        this._radius   = radius;
        this._name     = name;
    }

    draw() {
        circle(...this._position, this._radius);
    }

    //  ============================== getters and setters ==============================

    getRadius() {
        return this._radius;
    }

    setRadius(radius) {
        this._radius = radius;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }
}

Object.assign(Entity.prototype, Movable);
Object.assign(Entity.prototype, Health);

module.exports = {
    Entity,
    Movable,
    Health,
}