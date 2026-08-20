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
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        let result = 0;
        if (root) {
            result = Math.max(this.maxDepth(root.left) + 1, this.maxDepth(root.right) + 1);
        }

        return result;
    }
}
