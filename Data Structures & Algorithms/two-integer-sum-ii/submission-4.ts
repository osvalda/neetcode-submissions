class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let result = new Array(2).fill(0);
        let right = nums.length - 1;
        let left = 0;

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                return [left + 1, right + 1];
            } else if (nums[left] + nums[right] > target) {
                right--;
            } else {
                left++;
            }
        }

        return result;
    }
}
