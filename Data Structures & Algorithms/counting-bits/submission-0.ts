class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        let result = new Array(n+1).fill(0);

        for (let i = 0; i <= n; i++) {
            let res = 0;
            for (let m = 0; m < 10; m++) {
                if ((1 << m) & i) {
                    res++;
                }
            }
            result[i] = res;
        }

        return result;
    }
}
