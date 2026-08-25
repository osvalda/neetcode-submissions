class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        let result = [];
        intervals.sort((a, b) => a[0] - b[0]);
        result.push(intervals[0]);

        for (let act of intervals) {
            let start = act[0];
            let end = act[1];
            let latestEnd = result[result.length - 1][1];

            if (start <= latestEnd) {
                result[result.length - 1][1] = Math.max(latestEnd, end);
            } else {
                result.push(act);
            }
        }

        return result;
    }
}
