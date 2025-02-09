
// For

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element ==5){
//         console.log("5 is best number:")
//     }
//     console.log(element);
    
// }

// for (let i = 0; i < 10; i++) {

//     console.log(`This is outer loop ${i}`)
    
//     for (let j = 0; j < 10 ; j++) {

//         console.log(`This is a inner loop ${j} and outer loop ${i}`);
        
        
//     }
    
//}

let myArray = ["GKP","LKO","DELHI","NEW YORK"];

//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}



// Break and Continue

for (let index = 0; index < 20; index++) {

    if(index==5){
        console.log(`Value of index is detected ${index}`);
        break
    }
    const element = index;
    console.log(element);
    
}