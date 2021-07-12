export {};
Array.prototype.shuffle = function <T>(this: Array<T>): Array<T> {
    var currentIndex = this.length,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]];
    }

    return this;
};

Array.prototype.take = function <T>(this: Array<T>, count: number): Array<T> {
    return this.slice(0, count);
};
