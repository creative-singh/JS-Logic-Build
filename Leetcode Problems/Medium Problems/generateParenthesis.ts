// Question Link: https://leetcode.com/problems/generate-parentheses
// 22. Generate Parentheses

var generateParenthesis = function(n) {
    let result = [];

    function solve(str, open, close) {
        if(open + close === n * 2) {
            result.push(str);
            return;
        }

        if(open < n)
            solve(str + "(", open + 1, close);

        if(close < open)
            solve(str + ")", open, close + 1);
    }

    solve(str = "", open = 0, close = 0);
    return result    
};
