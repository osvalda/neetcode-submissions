class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights: number[]): number {
        let result = 0;
        let expected = [...heights];
        expected.sort((a, b) => a - b);
        for (let i = 0; i < heights.length; i++) {
            if (heights[i] != expected[i]) {
                result += 1;
            }
        }

        return result;
    }
}
