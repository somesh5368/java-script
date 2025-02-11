let myArray = [2,5,9,4,6,4,6,4,6];

let newdata = myArray.map((e)=>{
    return e+10
});

//console.log(newdata)


let newdat2 = myArray
            .map((e)=>{
                return e+10;
            }).map((e)=>{
                return e*10;
            }).filter((e)=>{
                return e>100;
            });

            console.log(newdat2);