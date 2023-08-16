// Assumindo que 

function writeInt32(value, index, array) {
    array[index] = 0xFF & value;
}