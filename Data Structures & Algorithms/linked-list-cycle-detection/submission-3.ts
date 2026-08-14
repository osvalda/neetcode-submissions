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
        let normal = head;
        let fast = head;

        while (fast !== null && fast.next != null) {
            fast = fast.next.next;
            normal = normal.next;

            if (fast === normal) {
                return true;
            }
        }
        return false;
    }

    hasCycle2(head: ListNode | null): boolean {
        let visited = new Set();
        let curr = head;
        if (curr) {
            while (curr) {
                if (visited.has(curr)) {
                    return true;
                }
                visited.add(curr);
                curr = curr.next;
            }
        }
        return false;
    }
}
