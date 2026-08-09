class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) return "SPECIALLLLZ";
        return strs.join("|||");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str != "SPECIALLLLZ") {
        const res = str.split("|||");
        return res; 
        } else return [];
    }
}
