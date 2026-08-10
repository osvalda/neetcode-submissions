class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let result = -1;
        let topEnd = nums.length;
        let half = Math.floor(nums.length / 2);
        let numOfHalving = 0;

        while (numOfHalving <= Math.floor(nums.length / 2)) {
            numOfHalving++;
            if (nums[half] === target) {
                return half;
            }
            if (nums[half] > target) {
                topEnd = half;
                half = Math.floor(half / 2);
            } else {
                half += Math.floor((topEnd - half) / 2);
            }
        }
        return result;
    }
}
