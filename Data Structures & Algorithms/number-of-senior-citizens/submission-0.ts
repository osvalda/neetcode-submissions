class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let result = 0;
        for (let act of details) {
            if (Number.parseInt(act[11] + act[12]) > 60) {
                result++;
            }
        }
        return result;
    }
}
