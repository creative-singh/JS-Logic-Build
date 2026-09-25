// Question Link: https://leetcode.com/problems/sum-game
// 1927. Sum Game

function sumGame(num: string): boolean {
    const n = num.length;
    let leftSum = 0, rightSum = 0, leftQM = 0, rightQM = 0;

    for (let i = 0; i < n / 2; i++) {
        if (num[i] === '?')
            leftQM++;
        else
            leftSum += Number(num[i]);
    }

    for (let i = n / 2; i < n; i++) {
        if (num[i] === '?')
            rightQM++;
        else
            rightSum += Number(num[i]);
    }

    return (leftSum - rightSum) * 2 !== (rightQM - leftQM) * 9;
};
