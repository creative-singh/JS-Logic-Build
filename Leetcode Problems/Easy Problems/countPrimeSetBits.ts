// Question Link: https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation
// 762. Prime Number of Set Bits in Binary Representation

function countPrimeSetBits(left: number, right: number): number {
    let res = 0;
    while(left <= right) {
        const binary = left.toString(2)
        const bits = countBit(binary)
        // if(isPrime(bits)) {
        if(bits === 2 || bits === 3 || bits === 5 || bits === 7 || bits === 11 || bits === 13 || bits === 17 || bits === 19){
            res++
        }
        left++;
    }

    return res;
};

function countBit(str) {
    let bits = 0;
    for(let i of str) {
        if(Number(i)) {
            bits++
        }
    }
    return bits
}

function isPrime(num) {
    if(num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;

    for(let i = 3; i <= Math.sqrt(num); i += 2) {
        if(num % i === 0) return false;
    }
    return true;
}
