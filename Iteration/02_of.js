// This loop are array specific

let details = ["hello","summ","donney"];

for (const det of details) {
    
   // console.log(det);

}


let name = "Somesh Pandey";

for (const nm of name) {
    //console.log(nm);
    
}



// Map 

const map = new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map);


//Print Through forof

for (const el of map) {
    //console.log(el);
    
}

// We have to use array block to print map

for (const [key,value] of map) {
    console.log(key,":-",value)
    
}

// For of on Object

let myObj ={
    name: "Somesh",
    Profession:"Student"
}

for (const [key,value] of myObj) {
    
    //console.log([key,":-",value]); the object is not iterable in forof loop
}


