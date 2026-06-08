// Question Link: https://leetcode.com/problems/create-binary-tree-from-descriptions
// 2196. Create Binary Tree From Descriptions


function createBinaryTree(descriptions: number[][]): TreeNode | null {
    let node = new Map();    // value -> TreeNode
    let parent = new Map();  // child node -> parent node
    let cur = null;

    for (const [p, c, isLeft] of descriptions) {

        // Create parent node if not present
        if (!node.has(p))
            node.set(p, new TreeNode(p));

        // Create child node if not present
        if (!node.has(c))
            node.set(c, new TreeNode(c));

        // Connect parent and child
        if (isLeft)
            node.get(p).left = node.get(c);
        else
            node.get(p).right = node.get(c);

        // Store parent of child
        parent.set(node.get(c), node.get(p));

        cur = node.get(p);
    }

    // Move up until root is found
    while (parent.has(cur))
        cur = parent.get(cur);

    return cur;
};
