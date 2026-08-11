class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let result = nums[0];
        for (let i = 0; i < nums.length; i++) {
            result = result < nums[i] ? result : nums[i];
        }

        return result;
    }
}
