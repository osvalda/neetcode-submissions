class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let result = new Array(2).fill(0);
        let diffs = new Map();

        for (let i = 0; i < nums.length; i++) {
            const currentDiff = target - nums[i];
            /*if (currentDiff === nums[i]) {
                continue;
            }*/
            if (diffs.get(currentDiff)) {
                result[0] = diffs.get(currentDiff);
                result[1] = i + 1;
                break;
            }
            diffs.set(nums[i], i + 1);
        }

        return result;
    }
}
