class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let size = nums.length;
        let set = new Set(nums);
        for (let i = 0; i <= size; i++) {
            if (!set.has(i)) return i;
        }
        return 0;
    }
}
