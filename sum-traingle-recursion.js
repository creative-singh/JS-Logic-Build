// Question Link : https://www.geeksforgeeks.org/sum-triangle-from-array/

function sumOfTriangle(arr){
    while(arr.length > 1){
        for(let i = 0; i < arr.length-1; i++){
            arr[i] = arr[i] + arr[i+1]
        }
        if(arr.length > 1) arr.pop()
    }
    return arr
}

console.log(sumOfTriangle([1, 2, 3, 4, 5]))    // 48
console.log(sumOfTriangle([3, 5, 8, 1, 4]))    // 79

console.log('----------------------------');

function withRecursion(arr){
    if(arr.length === 1) return arr[0]
    
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i] + arr[i+1]
    }
    if(arr.length > 1) arr.pop()
    
    return withRecursion(arr)
}


console.log(withRecursion([1, 2, 3, 4, 5]))    // 48
console.log(withRecursion([3, 5, 8, 1, 4]))    // 79
