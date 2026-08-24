class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2) return n;
        let one = 1,
            two = 1;

        for (let i = 1; i < n; i++) {
            let temp = one;
            one = one + two;
            two = temp;
        }

        return one;
    }
}
