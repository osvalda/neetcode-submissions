class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */

    private kth: number;
    private numbers: number[];

    constructor(k: number, nums: number[]) {
        this.kth = k;
        this.numbers = nums;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.numbers.push(val);
        this.numbers = this.numbers.sort((a, b) => a - b);
        return this.numbers[this.numbers.length - this.kth];
    }
}
