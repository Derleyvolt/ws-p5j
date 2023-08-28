const bitwise = require('../binaryUtils/binaryHandler');
const { PacketType } = require('./packetType');

function stringToASCII(string) {
    return string.split('').map(e => e.charCodeAt(0));
}

function stringToASCIIWithNullTerminated(string) {
    let result = stringToASCII(string);
    return [...result, 0];
}

function entityDetails(entity) {
    const type       = PacketType.entity.details;

    const name       = stringToASCIIWithNullTerminated(entity.getName());
    const velocity   = entity.getVelocity(); // 1 byte
    const position   = entity.getPosition(); // 4 bytes
    const radius     = entity.getRadius();   // 1 byte
    const health     = entity.getHealth();   // 2 bytes

    const buffer = new Uint8Array[name.length + 8];

    let index = 0;
    
    index = bitwise.writeInt16(type, index, buffer);
    index = bitwise.writeArrayByte(name, index, buffer);
    index = bitwise.writeByte(velocity, index, buffer);
    index = bitwise.writeInt16(position[0], index, buffer);
    index = bitwise.writeInt16(position[1], index, buffer);
    index = bitwise.writeInt8(radius, index, buffer);
    index = bitwise.writeInt16(health, index, buffer);

    return buffer;
}

function moveTo(position) {
    
}