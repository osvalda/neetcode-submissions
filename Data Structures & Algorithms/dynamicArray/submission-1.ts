class DynamicArray {
    accu: number[];
    capacity: number;
    
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.accu = [];
        this.capacity = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.accu[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.accu[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.capacity == this.accu.length) {
            this.resize();
        }
        this.accu[this.accu.length] = n;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        let res: number = this.accu[this.accu.length-1];

        this.accu[this.accu.length-1] = undefined;
        this.accu.length -= 1;

        return res;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity = this.capacity * 2;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.accu.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
