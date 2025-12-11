// Question Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number
// 17. Letter Combinations of a Phone Number

function letterCombinations(digits: string): string[] {
    if(!digits) return []

    let map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }
    let res: string[] = []

    function recurse(i: number, temp: string = ""): void {
        if(i === digits.length) {
            res.push(temp)
            return
        }

        let currKey = map[digits[i]]

        for(let char of currKey) {
            recurse(i + 1, temp + char)
        }
    }
    recurse(0)
    return res
};
