let a = [1,2,3,4,1,2,3,4,1,2,3,4];

 let b = [];

 for(let j of a){
     if(b.indexOf(j) === -1){
         b.push(j);
     }
 }

 console.log(b);

b = new Set(a);

console.log(b);