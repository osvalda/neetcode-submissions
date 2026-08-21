class KthLargest {
    private kth: number;
    private minHeap;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.kth = k;
        this.minHeap = new MinPriorityQueue();

        for (const num of nums) {
            this.minHeap.enqueue(num);
        }

        while (this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.enqueue(val);
        while (this.minHeap.size() > this.kth) {
            this.minHeap.dequeue();
        }
        return this.minHeap.front();
    }
}
