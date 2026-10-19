class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums: number[], k: number): number {
        nums.sort((a, b) => a - b);

        let result = Infinity;
        let l = 0;
        let r = k - 1;
        while (r < nums.length) {
            result = Math.min(result, nums[r] - nums[l]);
            r++;
            l++;
        }
        return result;
    }
}
