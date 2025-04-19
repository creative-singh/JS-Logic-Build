// Question Link: https://leetcode.com/problems/encode-and-decode-strings/description/

class Solution {
    encode(strs) {
        if(!strs.length) return ""
        let code = ""
        for(let i of strs) {
            code += `${i.length}#${i}`
        }
        console.log(code)
        return code
    }

    decode(str) {
        if (!str.length) return []
        let st = 0
        let en = 1
        let res = []
        while (en < str.length) {
            if(str[en] === "#"){
                let wordLen = parseInt(str.slice(st, en))
                res.push(str.slice(en + 1, en + wordLen + 1))
                st = en + wordLen + 1
                en += wordLen + 2
            } else {
            en++
            }
        }
        return res
    }
}
