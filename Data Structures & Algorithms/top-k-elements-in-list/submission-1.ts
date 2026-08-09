class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let result = [];
        let accu = new Map();
        for (let act of nums) {
            accu.set(act, (accu.get(act) || 0) + 1);
        }
        let max = 0;
        let maxKey = 0;
        for (let i = 0; i < k; i++) {
            for (let key of accu.keys()) {
                if (accu.get(key) > max) {
                    max = accu.get(key);
                    maxKey = key;
                }
            }
            result.push(maxKey);
            accu.delete(maxKey);
            max = 0;
            maxKey = 0;
        }

        return result;
    }
}
