class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let result = -99999999;
        let current = 0;

        for (const act of nums) {
            if (current < 0) {
                current = 0;
            }
            current += act;
            result = Math.max(result, current);
        }

        return result;
    }
}
