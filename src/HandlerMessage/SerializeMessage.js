const bitwise = require('../bitwiseUtils/binaryHandler');

function stringToASCII(string) {
    return string.split('').map(e => e.charCodeAt(0));
}

function stringToASCIIWithNullTerminated(string) {
    let result = stringToASCII(string);
    return [...result, 0];
}

function entityDetails(entity) {
    const name       = stringToASCIIWithNullTerminated(entity.getName());
    const velocity   = entity.getVelocity(); // 1 byte
    const position   = entity.getPosition(); // 4 bytes
    const radius     = entity.getRadius();   // 1 byte
    const health     = entity.getHealth();   // 2 bytes

    const buffer = new Uint8Array[name.length + 8];
}