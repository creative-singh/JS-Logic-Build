// Question Link: https://leetcode.com/problems/fruits-into-baskets-ii
// 3477. Fruits Into Baskets II

var numOfUnplacedFruits = function(fruits, baskets) {
    let placed = 0;
    
    for(let i = 0; i < fruits.length; i++){
        for(let j = 0; j < baskets.length; j++){
            if(fruits[i] <= baskets[j]){
                baskets[j] = -1;
                placed++
                break
            }
        }
    }

    return baskets.length - placed
};
