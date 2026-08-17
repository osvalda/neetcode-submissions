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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (head !== null && head.next !== null) {
            let actNode = head;
            let nextNode = actNode.next;
            actNode.next = null;

            while (nextNode !== null) {
                const saveNext = nextNode.next;
                nextNode.next = actNode;

                actNode = nextNode;
                nextNode = saveNext;
            }
            return actNode;
        } else {
            return head;
        }
    }
}
