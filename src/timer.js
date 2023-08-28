export class Timer {
    reset() {
        this.start = new Date();
    }

    elapsedTime() {
        let end = new Date();
        return end-this.start;
    }
}