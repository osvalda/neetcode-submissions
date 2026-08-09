class LinkedList {
    accu: number[];

    constructor() {
        this.accu = [];
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (this.accu.length <= index || index < 0) {
            return -1;
        }
        return this.accu[index];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        this.accu = [val, ...this.accu];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        this.accu[this.accu.length] = val;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (this.accu.length <= index) {
            return false;
        }
        let res: number[] = new Array();

        let k = 0;
        for (let i = 0; i < this.accu.length; i++) {
            if (i != index) {
                res[k] = this.accu[i];
                k += 1;
            }
        }
        this.accu = res;

        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        return this.accu;
    }
}
