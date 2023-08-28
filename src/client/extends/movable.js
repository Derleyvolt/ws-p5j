export const movable = {
    _mesh: undefined,
    _velocity: 0,
    
    setVelocity(value) {
        this._velocity = value;
    },
    getVelocity() {
        return this._velocity;
    },
    setPosition(position) {
        this._mesh.position.set(...position);
    },
    getPosition() {
        return this._mesh.position;
    },
    setX(value) {
        this._mesh.position.x = value;
    },
    setY(value) {
        this._mesh.position.y = value;
    }
}