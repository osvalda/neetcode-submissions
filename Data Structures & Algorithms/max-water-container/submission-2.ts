class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let result = 0;

        while (left < right){
            result = Math.max(Math.min(heights[left], heights[right]) * (right - left), result);
            if (heights[left] >= heights[right]) {
                right -= 1;
            } else {
                left += 1;
            }
        }

/*        for (let r = (heights.length - 1); r > 0; r--) {
            right = heights[r];
            for (let i = 0; i < heights.length - 1; i++) {
                left = heights[i];
                result = Math.max(Math.min(left, right) * (r - i), result);
            }
        }*/
        return result;
    }
}
