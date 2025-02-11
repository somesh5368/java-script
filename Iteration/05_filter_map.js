let array = ["java","java script","ruby","python","node"];

// let values =array.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values);

//The values are not save in any variable in the for each loop.


// Now we use filter to give the solution of this problems

const data = [2,5,,456,2,652,6,2,66,2,6];

let values = data.filter((items)=> items > 5);

//console.log(values);

// this filter also return values


//Same data if we use curly bracket then output will be is bracket so you need to use return keyword in curly bracket


const data1= [1,2,5,5,4,6,1,3,4];

const de = data1.filter((e)=>{
    return e>5;
});

//console.log(de);




let book = [
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "published_year": 1960,
      "edition": "1st"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "published_year": 1949,
      "edition": "1st"
    },
    {
      "title": "The Name of the Wind",
      "author": "Patrick Rothfuss",
      "genre": "Fantasy",
      "published_year": 2007,
      "edition": "1st"
    },
    {
      "title": "Dune",
      "author": "Frank Herbert",
      "genre": "Science Fiction",
      "published_year": 1965,
      "edition": "1st"
    },
    {
      "title": "The Left Hand of Darkness",
      "author": "Ursula K. Le Guin",
      "genre": "Science Fiction",
      "published_year": 1969,
      "edition": "1st"
    },
    {
      "title": "Eloquent JavaScript, Third Edition",
      "author": "Marijn Haverbeke",
      "genre": "Programming",
      "published_year": 2018,
      "edition": "3rd"
    },
    {
      "title": "Practical Modern JavaScript",
      "author": "Nicolás Bevacqua",
      "genre": "Programming",
      "published_year": 2017,
      "edition": "1st"
    },
    {
      "title": "Understanding ECMAScript 6",
      "author": "Nicholas C. Zakas",
      "genre": "Programming",
      "published_year": 2016,
      "edition": "1st"
    },
    {
      "title": "Speaking JavaScript",
      "author": "Axel Rauschmayer",
      "genre": "Programming",
      "published_year": 2014,
      "edition": "1st"
    },
    {
      "title": "Learning JavaScript Design Patterns",
      "author": "Addy Osmani",
      "genre": "Programming",
      "published_year": 2012,
      "edition": "1st"
    }
  ];


  let newValues = book.filter((items)=>{
    return items.genre ==="Programming" && items.edition === "3rd";
  });

  console.log(newValues);