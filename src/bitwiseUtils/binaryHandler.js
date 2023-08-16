// Assumindo que a maquina no servidor seja little-endian.

function writeArrayByte(src, index, dest) {
    for(var i = 0; i < src.length; i++) {
        dest[index+i] = src[i];
    }
}

function writeInt32(value, index, dest) {
    dest[index]     = (value >> 24) && 0xFF;
    dest[index + 1] = (value >> 16) & 0xFF;
    dest[index + 2] = (value >> 8) & 0xFF;
    dest[index + 3] = value & 0xFF;
}

function writeInt16(value, index, dest) {
    dest[index] = (value >> 8) & 0xFF;
    dest[index + 1] = value & 0xFF;
}

function readInt32(index, dest) {
    let value = dest[index] << 24;
    value     = value | dest[index + 1] << 16;
    value     = value | dest[index + 2] << 8;
    value     = value | dest[index + 3];
    return value;
}

function readInt16(index, dest) {
    return (dest[index] << 8) | dest[index + 1];
}