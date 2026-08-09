class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let result = true;

        for (let i = 1; i < s.length; i++) {
            if (s[i] === ")" && s[i - 1] === "(") {
                s = this.removeAt(s, i-1);
                i=0;
            }
            if (s[i] === "]" && s[i - 1] === "[") {
                s = this.removeAt(s, i-1);
                i=0;
            }
            if (s[i] === "}" && s[i - 1] === "{") {
                s = this.removeAt(s, i-1);
                i=0;
            }
        }

        return s.length===0;
    }

    removeAt(str1, idx) {
        return str1.substr(0, idx) + str1.substr(idx + 2);
    }
}
