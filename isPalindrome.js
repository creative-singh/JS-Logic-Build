function toCheckPalindrome(inputArr){
    let halfLength = inputArr.length  2;
    let length = inputArr.length;
    
    for(let i = 0; i  halfLength; i++){
        let swappedVar = length - i - 1;
        if(inputArr[i] !== inputArr[swappedVar]){
            return Not a Palindrome;
        }
    }
    return Palindrome;
}


 let input = [1,2,3,2,1];
let input = tata;
console.log(toCheckPalindrome(input));
