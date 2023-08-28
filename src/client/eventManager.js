export class EventManager {
    constructor() {
        this.listener = new Map();
    }

    on(event, callback) {
        if(this.listener.get(event)) {
            this.listener.set(event, [...this.listener.get(event), callback]);
        } else {
            this.listener.set(event, [callback]);
        }
    }

    emit(event, param) {
        if(this.listener.get(event)) {
            for(var func of this.listener.get(event)) {
                func(param);
            }
        }
    }
}

// ev = new EventManager();

// ev.on('message', () => {
//     console.log('function 1');
// });

// ev.on('message', () => {
//     console.log('function 2');
// });

// ev.on('message', () => {
//     console.log('function 3');
// });

// ev.emit('messagexx');