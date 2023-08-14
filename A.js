let buffer = new ArrayBuffer(4);
let view   = new Uint8Array(buffer);

const str = 'rato';

POSITION = 0x1

view.forEach(function(value, index, array) {
    array[index] = str.charCodeAt(index);
});

console.log(view);