class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let result = digits.reverse();
        for (let i = 0; i < result.length; i++) {
            if (result[i] < 9) {
                result[i] += 1;
                break;
            } else {
                result[i] = 0;
            }
            if (i == result.length - 1 && result[i] == 0) {
                result.push(1);
                break;
            }
        }

        return result.reverse();
    }
}
