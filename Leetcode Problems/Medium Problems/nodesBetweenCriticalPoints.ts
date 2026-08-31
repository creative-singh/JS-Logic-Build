// Question Link: https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points
// 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points

var nodesBetweenCriticalPoints = function(head) {
    let first = -1, last = -1, minDistance = Infinity, position = 1, prev = head, curr = head.next;

    while (curr !== null && curr.next !== null) {
        const isCritical =
            (curr.val > prev.val && curr.val > curr.next.val) ||
            (curr.val < prev.val && curr.val < curr.next.val);

        if (isCritical) {
            if (first === -1) {
                first = position;
            } else {
                minDistance = Math.min(minDistance, position - last);
            }
            last = position;
        }

        prev = curr;
        curr = curr.next;
        position++;
    }
    if (first === -1 || first === last) {
        return [-1, -1];
    }

    const maxDistance = last - first;
    return [minDistance, maxDistance];
};
