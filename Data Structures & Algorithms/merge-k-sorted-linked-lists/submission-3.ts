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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if (lists.length > 0) {
            while (lists.length > 1) {
                const mergedLists = [];
                for (let i = 0; i < lists.length; i += 2) {
                    const l1 = lists[i];
                    const l2 = i + 1 < lists.length ? lists[i + 1] : null;
                    mergedLists.push(this.mergeTwoLists(l1, l2));
                }
                lists = mergedLists;
            }
            return lists[0];
        }
        return null;
    }

    mergeTwoLists(a: ListNode, b: ListNode): ListNode {
        const dummy = new ListNode();
        let tail = dummy;

        while (a && b) {
            if (a.val < b.val) {
                tail.next = a;
                a = a.next;
            } else {
                tail.next = b;
                b = b.next;
            }
            tail = tail.next;
        }
        if (a) {
            tail.next = a;
        }
        if (b) {
            tail.next = b;
        }
        return dummy.next;
    }
}
