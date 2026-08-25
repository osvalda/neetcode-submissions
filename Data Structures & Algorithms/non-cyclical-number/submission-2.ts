class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        let results = new Set();
        let sum = n;

        do {
            results.add(sum);
            sum = this.sumOfSquares(sum);
        } while (sum !== 1 && !results.has(sum));

        return sum === 1;
    }

    sumOfSquares(n) {
        let output = 0;

        while (n > 0) {
            let digit = n % 10;
            output += digit ** 2;
            n = Math.floor(n / 10);
        }
        return output;
    }
}
