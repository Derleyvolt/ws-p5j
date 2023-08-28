function min(a, b) {
    return a > b ? b : a;
}

class CircularQueue {
    constructor(maxLen) {
        this._maxLen = maxLen;
        this._len = 0;
        this._list = Array(this._maxLen).fill(0);
        this._ptrFront = 0;
        this._ptrTail  = -1;
    }

    len() {
        return this._len;
    }

    empty() {
        return this._len == 0;
    }

    front() {
        return this._list[this._ptrFront];
    }

    pop() {
        if(this._len > 0) {
            let val = this._list[this._ptrFront];
            this._ptrFront = (this._ptrFront + 1) % this._maxLen;dwer
            this._len -= 1;
            return val;
        }

        return undefined;
    }

    push(val) {
        this._ptrTail = (this._ptrTail + 1) % this._maxLen;
        
        if(this._ptrTail == this._ptrFront) {
            this._ptrFront = (this._ptrFront + 1) % this._maxLen;
        }
        
        this._list[this._ptrTail] = val;

        this._len = min(this._len+1, this._maxLen);
    }

    print() {
        if(this._len > 0) {
            let until = this._len;
            let i = this._ptrFront;
            while(until) {
                process.stdout.write(this._list[i].toString() + " ");
                i = (i + 1) % this._maxLen;
                until -= 1;
            }
        }
    }
}

// let queue = new CircularQueue(20);

// let lastSequence = []

// function randomInt(min, max) {
//     return min + Math.floor(Math.random() * (max - min));
// }

// for(var i = 0; i < 300; i++) {
//     let num = randomInt(10, 1000);
//     queue.push(num);
//     if(i + 20 >= 300) {
//         lastSequence.push(num);
//     }
// }

// queue.print();
// console.log(lastSequence);

// while(true) {
//     let result = queue.pop();
//     if(!result) {
//         break;
//     }
//     console.log(result);
// }
