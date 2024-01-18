//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favorites(foodie) {
    for (let key in foodie) {
        if
        console.log(${});

        else
        console.log(${});
    }



}

favorites(person3)
// const text = '{"pizza", "tacos", "burgers", "ice_cream" "shakes"}'
// const object = JSON.parse(text);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age Done, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.// more than once
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function ourPerson(name, age) {
    this.Name = Name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo= () => {
        console.log('Name: ${this.Name}, Age: ${this.age}');

    };

// Use an arrow to create the incrementage method
    this.IncrementAge = () => {
        this.age+=1;
    // this.age({age: ourPerson.this.age + 1});
    };

}

const myfriend2 = ourPerson("Keith", 37);
const myfriend3 = ourPerson ("Jane", 43);


myfriend2.printInfo();
myfriend3.printInfo();

myfriend3.printInfo();
myfriend3.printInfo();
myfriend3.printInfo();

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checklengthgreater(str){
let length = new Promise ((resolve,reject) => {
    let x = 10 //also had 5+5 here
    if (str.length >= 10) {
        resolve ('Big Word');
    } else {
        reject('Small Number');
    }
});
}

// length.then((message) => {
//     console.log ('The then' + message);
// })

checklengthgreater()
    .then((message) => {
        console.log ('The then' + message);
    })

    .catch((message) => {
        console.log('The catch' + message);
    });


// notes from vid below
// const length = new Promise ((resolve, rejected)=> {

//     if (length > 10) {

//         resolve ('Big Word')

//     } else {

//         reject ('Small Number')
//     }


// });

// length
//     .then (length > 10 {
//         console.log("Big word");

//     })

