const entity = require('./Objects/entity');

let fps = 60;

function setup() {
    frameRate(fps);
    createCanvas(800, 800);
    getRandomCircles();
}

class Circle {
    constructor(x, y, radius, color) {
        this._position = [x, y];
        this._radius   = radius;
        this._color    = color;
    }

    draw() {
        circle(this._position[0], this._position[1], this._radius, this._color);
    }

    getPosition() {
        return this._position;
    }

    setPosition(position) {
        this._position = position;
    }

    // getters and setters
    getX() {
        return this._position[0];
    }

    getY() {
        return this._position[1];
    }

    setX(x) {
        this._position[0] = x;
    }

    setY(y) {
        this._position[1] = y;
    }

    getRadius() {
        return this._radius;
    }

    setRadius(radius) {
        this._radius = _radius;
    }
}

let circles = [];

let player = undefined; 

function getRandomCircles() {
    for(var i = 0; i < 10; i++) {
        circles.push(new Circle(random(800), random(800), random(60), [1, 1, 1]));
    }

    player = circles[math.floor(math.random(10))];
}

function normalize(vec) {
    return math.divide(vec, math.norm(vec));
}

function distance(p1, p2) {
    return math.norm(math.subtract(p1, p2));
}

function draw() {
    background(220);
    //console.log(player);

    for(var circle of circles) {
        circle.draw();
    }

    let mousePosition = [mouseX, mouseY];
    let dir           = normalize(math.subtract(mousePosition, player.getPosition()));

    //console.log(dir);

    player.setPosition(math.add(player.getPosition(), dir));
}