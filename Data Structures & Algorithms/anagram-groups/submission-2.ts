class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let result = {};

        for (let act of strs) {
            const sortedAct = act.split("").sort().join();
            if(!result[sortedAct]) {
                result[sortedAct] = [];
            }
            result[sortedAct].push(act);
        }

        return Object.values(result);

    }
}
