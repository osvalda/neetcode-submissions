class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        let l = 0;
        let result = 0;
        let r = 0;

        while (r < nums.length - 1) {
            let start = 0;
            for (let i = l; i <= r; i++) {
                start = Math.max(start, i + nums[i]);
            }
            l = r + 1;
            r = start;
            result++;
        }

        return result;
    }
}
