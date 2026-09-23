/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        let map = new Map();

        const dfs = (node) => {
            if (node === null) return null;

            if (map.has(node)) return map.get(node);

            map.set(node, new Node(node.val, []));

            for (let act of node.neighbors) {
                map.get(node).neighbors.push(dfs(act));
            }

            return map.get(node);
        };

        return dfs(node);
    }
}
