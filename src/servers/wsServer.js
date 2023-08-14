require('../server_resources/config');
const { v4 : uuid } = require('uuid');
// const EventEmitter  = require('events');
// const eventEmitter = new EventEmitter();

const { WebSocketServer } = require('ws');

console.log(process.env.WS_PORT);

const ws = new WebSocketServer({ port: process.env.WS_PORT });

let clients = new Map();

ws.on('connection', function connection(client) {
    console.log(uuid());

    client.on('close', function(data) {
        clients.delete(data);
    });

    clients.set(uuid(), {client: client});

    client.on('message', function (data) {
        console.log(client.binaryType);
        console.log('received: %s', data);
    });

    client.send('something');

    client.emit()
});

while(true) {
    setInterval(function() {
        console.log('Some message');
    }, 500);
}

