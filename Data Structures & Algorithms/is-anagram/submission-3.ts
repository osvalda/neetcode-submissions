class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }   

        let sH = {}; 
        let tH = {}; 
        for (let i = 0; i < s.length; i++) {
            sH[s[i]] = (sH[s[i]] || 0) + 1; 
            tH[t[i]] = (tH[t[i]] || 0) + 1;
        }

        for (let key in sH) {
            if (sH[key] !== tH[key]) {
                return false;
            }
        }

        return true;
    }
}
