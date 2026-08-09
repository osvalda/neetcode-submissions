class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s === t) {
            return true;
        }
        let sArr = new Array(...s);
        sArr.sort();
        let tArr = new Array(...t);
        tArr.sort();

        return tArr +"" === sArr+"";
    }
}
