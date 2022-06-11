function checkPrimeOrNot(num) {
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return "Not Prime";
        }
    }
    return "Prime";
}


const result = checkPrimeOrNot(15);
console.log(`The number given is ${result}`);