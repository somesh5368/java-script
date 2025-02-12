let myArray = [1,2,3];

// let myTotal = myArray.reduce(function(acc,currvalue){
//     console.log(`acc: ${acc} and currval: ${currvalue}`)
//     return  acc+currvalue
// },0)

// console.log(myTotal)

let myTotal = myArray.reduce((acc,currvalue)=> acc+currvalue,0);


//console.log(myTotal);




let shopdetails = [
    {"item": "Notebook", "price": 25.00},
    {"item": "Keyboard", "price": 45.99},
    {"item": "Mouse", "price": 15.99},
    {"item": "Monitor", "price": 150.00},
    {"item": "Desk Lamp", "price": 30.50},
    {"item": "Chair", "price": 85.75},
    {"item": "Headphones", "price": 65.00},
    {"item": "Backpack", "price": 40.00},
    {"item": "Smartphone", "price": 499.99},
    {"item": "Tablet", "price": 299.99},
    {"item": "USB Drive", "price": 10.50},
    {"item": "External Hard Drive", "price": 120.00},
    {"item": "Pen", "price": 2.50},
    {"item": "Pencil", "price": 1.00},
    {"item": "Printer", "price": 89.99},
    {"item": "Router", "price": 75.00},
    {"item": "Speakers", "price": 55.00},
    {"item": "Webcam", "price": 49.99},
    {"item": "Calculator", "price": 20.00},
    {"item": "Notebook", "price": 25.00}
];



let pay = shopdetails
            .filter((item)=>item.price>20)
            .map((item)=>item.price +180 )
            .reduce((acc,currvalue)=> acc+currvalue,0);


console.log(pay);

