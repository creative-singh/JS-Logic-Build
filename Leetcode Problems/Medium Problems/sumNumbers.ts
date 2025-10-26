// Question Link: https://leetcode.com/problems/sum-root-to-leaf-numbers/
// 129. Sum Root to Leaf Numbers

var sumNumbers = function(root) {
    let res = 0;

    function helper(root, str) {
        if(!root) {
            return "";
        }
        str += root.val;
        let left = helper(root.left, str)
        let right = helper(root.right, str)

        if(!left && !right) {
            res += Number(str);
        }
        return 1
    }

    helper(root, '');
    return res;
};
