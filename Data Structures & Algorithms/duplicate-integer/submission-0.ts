class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let hash = {};

        for (let i = 0; i < nums.length; i++) {
            if (hash[nums[i]]) {
                return true;
            } 
            hash[nums[i]] = 1;
        }
        return false;
    }
}
