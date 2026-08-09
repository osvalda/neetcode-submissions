class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        let accu = new Array(nums.length).fill(1);

        for(let i = nums.length - 1; i>=0; i--) {
            for(let j = i + 1; j < nums.length; j++){
                if (nums[i] < nums[j]) {
                    accu[i] = Math.max(accu[i], 1 + accu[j]);
                }
            }
        }
        return Math.max(...accu);
    }

}
