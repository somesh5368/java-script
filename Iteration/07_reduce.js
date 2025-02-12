let myArray = [1,2,3];

// let myTotal = myArray.reduce(function(acc,currvalue){
//     console.log(`acc: ${acc} and currval: ${currvalue}`)
//     return  acc+currvalue
// },0)

// console.log(myTotal)

let myTotal = myArray.reduce((acc,currvalue)=> acc+currvalue,0);


console.log(myTotal);
