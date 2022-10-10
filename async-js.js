// eatBreakfast();
// eatLunch();
// eatDinner();
// eatDessert();

// eatBreakfast(function(){
//     eatLunch(function(){
//          eatDinner(function(){
//             eatDessert();   // Callback hell
//         })
//     })
// });

// Promises
//    - Reduces Callback Hell
//    - Give better Error Handling
// Promises has 3 states  
//   - Pending State      - Initial State of promise
//   - FullFilled State   - Resolve  
//   - Rejected State     - Reject

// Promises with Anonymous Function
// eatBreakfast()
//   .then(function() {
//     return eatLunch();
//   })
//   .then(function() {
//     return eatDinner();
//   })
//   .then(function() {
//     return eatDessert();
//   })
//   .catch(function(e) {
//     console.error(e);
//   });

// Arrow Function
// eatBreakfast()
//   .then(() => eatLunch())
//   .then(() => eatDinner())
//   .then(() => eatDessert())
//   .catch((error) => console.error(e))

// Async/Await
//   - Just simplifies Promises and Callback
//   - Callback hell is no more
//   - Try() Catch()
async function runnerFunction() {
  try {
    await eatBreakfast();
    await eatLunch();
    await eatDinner();
    await eatDessert();
  } catch (e) {
    console.error(e);
  }
};

runnerFunction();

// function eatBreakfast(callback){
//     // console.log("I'm having breakfast");
//     setTimeout(()=>{
//         console.log("I ate breakfast");
//         if(callback) callback();
//     },1000);
// }
function eatBreakfast() {
  return new Promise(function(resolve, reject) {
    // console.log("I'm having breakfast");
    setTimeout(() => {
      console.log("I ate breakfast");
      resolve();
    }, 1000);
  })
}

// function eatLunch(callback){
//     // console.log("I'm having lunch");
//     setTimeout(()=>{
//       console.log("I just had lunch");
//       if(callback) callback();
//     }, 500);
// }
function eatLunch() {
  return new Promise(function(resolve, reject) {
    // console.log("I'm having lunch");
    setTimeout(() => {
      console.log("I just had lunch");
      resolve();
    }, 500);
  })
}

// function eatDinner(callback){
//     // console.log("I'm having dinner");
//     setTimeout(()=>{
//         console.log("I ate dinner");
//         if(callback) callback();
//     },800);
// }
function eatDinner() {
  return new Promise(function(resolve, reject) {
    // console.log("I'm having dinner");
    setTimeout(() => {
      console.log("I ate dinner");
      resolve();
    }, 800);
  })
}

// function eatDessert(callback){
//     // console.log("I'm having dessert");
//     setTimeout(()=>{
//         console.log("I just ate dessert.")
//         if(callback) callback();
//     }, 200);
// }
function eatDessert() {
  return new Promise(function(resolve, reject) {
    // console.log("I'm having dessert");
    setTimeout(() => {
      console.log("I just ate dessert.")
      resolve();
    }, 200);
  })
}


