// Question Link: https://leetcode.com/problems/stone-removal-game
// 3360. Stone Removal Game

function canAliceWin(n: number): boolean {
    const missing = 55 - n,
        unplayed = Math.round(Math.sqrt(2 * missing));

    return unplayed % 2 === 1;
};
