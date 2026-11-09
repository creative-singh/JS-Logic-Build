// Question Link: https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests
// 1606. Find Servers That Handled Most Number of Requests

var busiestServers = function(k, arrival, load) {
    const free = new PriorityQueue((a, b) => a - b, [...Array(k).keys()]); 
    const busy = new PriorityQueue((a, b) => a[0] - b[0]);
    const handled = new Array(k).fill(0);

    for (const [i, t] of arrival.entries()) {
        while (!busy.isEmpty() && busy.front()[0] <= t) { 
            const [, x] = busy.dequeue();
            free.enqueue(i + (x - i % k + k) % k);
        }
        if (free.isEmpty()) continue;
        
        const x = free.dequeue() % k;
        busy.enqueue([t + load[i], x]);
        handled[x]++;
    }

    const most = handled.reduce((a, b) => Math.max(a, b));
    return [...handled.keys()].filter(x => handled[x] === most);
};
