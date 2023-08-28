class Timer {
    reset() {
        this.start = new Date();
    }

    elapsedTime() {
        let end = new Date();
        return end-this.start;
    }
}

let timer = new Timer();

timer.reset();

while(timer.elapsedTime() < 5000.0) {
    console.log(timer.elapsedTime());
}

console.log('Tempo decorrido %f (s)', timer.elapsedTime());