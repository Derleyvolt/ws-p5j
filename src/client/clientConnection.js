const { handlerMessage } = require('./HandlerMessage/DeserializeMessage');

let socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('error', function() {
    console.error();
});

// nesse 'open' o game é iniciado.
socket.addEventListener('open', function(event) {
    
});

socket.addEventListener('message', handlerMessage);

$('#btn').on('click', function(e) {
    socket.send($('#text').val());
});