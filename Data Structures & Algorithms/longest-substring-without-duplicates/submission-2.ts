class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let subString = "";
        let result = 0;

        if (s.length > 0) {
            for (let i = 0; i < s.length; i++) {
                if (subString.indexOf(s[i]) >= 0) {
                    subString = subString.substring(subString.indexOf(s[i]) + 1, subString.length);
                }
                subString += s[i];
                result = Math.max(result, subString.length);
            }
        }

        return result;
    }
}
