class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let r = s.length-1;
        s = s.toLowerCase();

        for(let l = 0; l < r; l++) {
            if (!this.alphaNum(s[l])) {
                continue;
            }
            while (!this.alphaNum(s[r])) {
                r--;
            }
            if(s[l] != s[r]) {
                return false;
            }
            r--;
        }

        return true;
    }

    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
