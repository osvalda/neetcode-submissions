class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let result = digits[digits.length - 1];
        let resultArr = [];
        let n = 10;
        for (let i = digits.length - 2; i >= 0; i--) {
            result += digits[i] * n;
            n *= 10;
        }

        (result + 1)
            .toString()
            .split("")
            .forEach((act) => resultArr.push(Number.parseInt(act)));

        return resultArr;
    }
}
