// https://leetcode.com/problems/sort-array-by-increasing-frequency

var frequencySort = function(nums) {
    let map = new Map();
    for(let i of nums){
        let exist = map.get(i)
        if(exist) map.set(i, ++exist)
        else map.set(i, 1)
    }

    for(let [key,value] of map){
        nums.sort((a,b)=>{
            if(map.get(a) === map.get(b)){
                return b-a
            }
            return map.get(a) - map.get(b)
        })
        
    }
    return nums
};
