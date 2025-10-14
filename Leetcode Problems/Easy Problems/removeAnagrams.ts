// Question Link: https://leetcode.com/problems/find-resultant-array-after-removing-anagrams
// 2273. Find Resultant Array After Removing Anagrams

function removeAnagrams(words: string[]): string[] {
    let res = [];
    let str = "";
    for(let i = 0; i < words.length; i++) {
        let comp = words[i].split("").sort().join('')
        if(str !== comp) {
            res.push(words[i]);
            str = comp
        }
    }
    return res
};
