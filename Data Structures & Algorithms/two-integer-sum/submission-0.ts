class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let res: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            for (let l = 0; l < nums.length; l++) {
                if (i === l) {break;}
                if (nums[i] + nums[l] == target) {
                    return [i, l];
                }
            }
        }

        return res;
    }
}
