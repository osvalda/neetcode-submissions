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
            sum = this.collect(sum + "");
        } while (sum !== 1 && !results.has(sum));

        if (sum === 1) {
            return true;
        } else {
            return false;
        }
    }

    collect(value: string): number {
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += Math.pow(Number.parseInt(value[i]), 2);
        }
        return sum;
    }
}
