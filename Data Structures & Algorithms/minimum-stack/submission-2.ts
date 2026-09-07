class MinStack {
    private storage;
    private min: number;
    constructor() {
        this.storage = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.storage.push(val);
        if (this.min == undefined || this.min > val) this.min = val;
    }

    /**
     * @return {void}
     */
    pop(): void {
        let element = this.storage[this.storage.length - 1];
        this.storage = this.storage.slice(0, -1);
        if (this.min === element) this.findNewMin();
        return element;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.storage[this.storage.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }

    findNewMin() {
        let temp = new Array(this.storage).flat();
        temp.sort((a, b) => a - b);
        this.min = temp[0];
    }
}
