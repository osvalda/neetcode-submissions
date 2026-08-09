class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let save = new Map();

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];

            if (save.has(diff)) {
                return [save.get(diff), i];
            }

            save.set(nums[i], i);
        }

        return [];
    }
}
