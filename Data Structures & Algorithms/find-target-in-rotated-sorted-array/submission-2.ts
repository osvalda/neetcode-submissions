class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        const piv = l;

        const result = this.binarySearch(nums, target, 0, piv - 1);
        if (result === -1) {
            return this.binarySearch(nums, target, piv, nums.length - 1);
        }
        return result;
    }

    binarySearch(nums: number[], target: number, left: number, right: number): number {
        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            if (nums[middle] === target) {
                return middle;
            } else if (nums[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return -1;
    }
}
