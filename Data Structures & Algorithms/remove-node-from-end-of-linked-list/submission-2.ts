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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if (head) {
            let actNode = head;
            let nextNode = head.next;
            let size = 1;
            while (nextNode) {
                size++;
                actNode = nextNode;
                nextNode = nextNode.next;
            }

            let position = size - n;

            actNode = head;
            if (position == 0) {
                head = actNode.next;
            }
            while (position > 1) {
                position--;
                actNode = actNode.next;
            }
            if (actNode.next) actNode.next = actNode.next?.next;
            else head = null;
        }
        return head;
    }
}
