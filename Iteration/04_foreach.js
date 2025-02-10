let array =["js","ruby","py","java","node"];

// array.forEach(function(item){
//     console.log(item);
// })


array.forEach((item)=>{
    //console.log(item);
})


//we use function call back and function name are not mention.





let details = [
    {
        "name": "Somesh",
        "color": "red",
    },
    {
        "name": "Nitish",
        "color": "blue",
    },
    {
        "name": "Ram",
        "color": "yellow"
    },
    {
        "name": "Shyam",
        "color": "sky"
    }
]

details.forEach(element => {
    console.log(element["name"])
});
