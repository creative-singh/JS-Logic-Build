// Question Link: https://leetcode.com/problems/clone-graph
// 133. Clone Graph

var cloneGraph = function(node) {
    let visited = new Map()

    function dfs(node) {
        if(!node)
            return node

        if(visited.has(node))
            return visited.get(node)

        let newNode = new _Node(node.val)
        visited.set(node, newNode)
        for(let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor))
        }
        return newNode
    }

    return dfs(node)
};