class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let product = 1;
        let result = new Array(nums.length).fill(0);

        let numberOfZeros = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                product *= nums[i];
            } else {
                numberOfZeros++;
            }
        }
        if (numberOfZeros <= 1) {
            for (let l = 0; l < nums.length; l++) {
                if (nums[l] === 0 || !numberOfZeros) {
                    result[l] = product / (nums[l] === 0 ? 1 : nums[l]);
                } else {
                    continue;
                }
            }
        }

        return result;
    }
}
