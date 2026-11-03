class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const dp = new Map();
        dp.set(s.length, 1);

        return this.dfs(s, 0, dp);
    }

    dfs(s: string, i: number, dp: Map<number, number>): number {
        if (dp.has(i)) {
            return dp.get(i);
        }
        if (s.charAt(i) === "0") {
            return 0;
        }

        let result = this.dfs(s, i + 1, dp);
        if (
            i + 1 < s.length &&
            (s.charAt(i) === "1" || (s.charAt(i) === "2" && s.charAt(i + 1) < "7"))
        ) {
            result += this.dfs(s, i + 2, dp);
        }

        dp.set(i, result);
        return result;
    }
}
