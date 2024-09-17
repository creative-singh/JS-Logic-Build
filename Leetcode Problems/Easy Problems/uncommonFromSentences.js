// Question Link: https://leetcode.com/problems/uncommon-words-from-two-sentences

var uncommonFromSentences = function(s1, s2) {
    let map = new Map()
    let s1Arr = s1.split(" ")
    let s2Arr = s2.split(" ")
    
    setVal(map, s1Arr)
    setVal(map, s2Arr)
    
    const res = []
    for(let [key,val] of map){
        if(val === 1) res.push(key)
    }
    return res;
};

const setVal = (map, arr) => {
    for(let i of arr){
        let cnt = map.get(i)
        if(cnt){
            map.set(i, cnt+1)
        }else{
            map.set(i, 1)
        }
    }
}
