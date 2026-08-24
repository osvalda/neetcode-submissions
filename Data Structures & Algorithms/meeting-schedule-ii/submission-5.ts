/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        let result = 0;

        if (intervals.length > 0) {
            intervals.sort((a, b) => a.start - b.start);
            const minHeap = new MinPriorityQueue();

            for (let act of intervals) {
                if (minHeap.front() <= act.start) {
                    minHeap.pop();
                }
                minHeap.push(act.end);
            }

            return minHeap.size();
        }

        return result;
    }
}
