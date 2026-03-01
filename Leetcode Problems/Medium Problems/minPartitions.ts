// Question Link: https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers
// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers

function minPartitions(n: string): number {
    for(let i = 9; i >= 1; i--) {
        if(n.includes(i.toString()))
            return i
    } 
    return 0
};
