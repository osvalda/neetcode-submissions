/*class Pair {
   constructor(private key: number, private value: string) {}
}*/
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]): Pair[][] {
        const length = pairs.length;
        let result = [];

        for (let i = 0; i < length; i++) {
            let j = i - 1;

            while (j >= 0 && pairs[j].key > pairs[j + 1].key) {
                [pairs[j], pairs[j + 1]] = [pairs[j + 1], pairs[j]];
                j -= 1;
            }

            result.push([...pairs]);
        }

        return result;
    }
}
