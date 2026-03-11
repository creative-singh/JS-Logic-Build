// Question Link: https://leetcode.com/problems/complement-of-base-10-integer
// 1009. Complement of Base 10 Integer

function bitwiseComplement(n: number): number {
    if (n === 0) return 1;
    const binary = n.toString(2)

    let str = ""
    for(let i of binary) {
        if(Number(i)){
            str += "0"
        } else {
            str += "1"
        }
    };
    return parseInt(str, 2)
};
