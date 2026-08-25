class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        nums = [...new Set(nums).values()];
        nums.sort((a, b) => a - b);
        let result = 0;
        let temp = 1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i + 1] - 1) {
                temp++;
            } else {
                temp = 1;
            }
            result = Math.max(temp, result);
        }

        return result;
    }
}
