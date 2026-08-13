/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let visited = [];
        if (head) {
            visited.push(head.val);
            let hasNext = head.next != null;
            let act = head;
            while (hasNext) {
                act = act.next;
                if (visited.indexOf(act.val) >= 0) {
                    if (act.next != null) return true;
                }
                visited.push(act.val);
                hasNext = act.next != null;
            }
        }
        return false;
    }
}
