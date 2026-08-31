/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        return this.valueChecker(p, q);
    }

    valueChecker(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q) return true;
        if (!p || !q) return false;
        let left = this.valueChecker(p.left, q.left);
        let right = this.valueChecker(p.right, q.right);
        return p.val === q.val && p.left?.val == q.left?.val && p.right?.val === q.right?.val && left && right;
    }
}
