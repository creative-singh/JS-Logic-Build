// Question Link: https://leetcode.com/problems/course-schedule
// 207. Course Schedule

var canFinish = function (numCourses, prerequisites) {
    const adjList = new Map();
    const indegree = new Array(numCourses).fill(0);

    for (let [course, pre] of prerequisites) {
        if (!adjList.has(pre)) 
            adjList.set(pre, []);

        adjList.get(pre).push(course);
        indegree[course]++;
    }

    let queue = [];
    let result = 0;

    for (let i = 0; i < numCourses; i++)
        if (indegree[i] === 0) 
            queue.push(i);

    while(queue.length) {
        const curr = queue.shift();
        result++

        if(adjList.has(curr)){
            for(let neighbor of adjList.get(curr)){
                indegree[neighbor]--;
                if(indegree[neighbor] === 0)
                    queue.push(neighbor)
            }
        }
    }
    return result === numCourses;
};
