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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if (root) {
            let temp = this.invert(root.right);
            root.right = this.invert(root.left);
            root.left = temp;
        }
        return root;
    }

    invert(root: TreeNode | null): TreeNode {
        if (root) {
            let temp = this.invert(root.left);
            root.left = this.invert(root.right);
            root.right = temp;
        }
        return root;
    }
}
