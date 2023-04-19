import { makeObservable, observable, computed, action } from 'mobx';

export default class Timer {
    constructor(root) {
        this.root = root;
        makeObservable(this, {
            start: observable,
            current: observable,
            elapsedTime: computed,
            tick: action,
        });
    }

    start = Date.now();
    current = Date.now();

    get elapsedTime() {
        console.log(this.start, this.current)
        return (this.current - this.start) + "milliseconds"
    }

    tick() {
        this.current = Date.now()
    }
}