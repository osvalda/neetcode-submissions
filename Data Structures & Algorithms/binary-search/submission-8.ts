class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        return this.binary_search(0, nums.length - 1, nums, target);
    }

    binary_search(l: number, r: number, nums: number[], target: number): number {
        if (l > r) return -1;
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] === target) return m;
        return nums[m] < target
            ? this.binary_search(m + 1, r, nums, target)
            : this.binary_search(l, m - 1, nums, target);
    }
}
