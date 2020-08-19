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
function displayObj(person){
//Displays all the favorite food dishes (keys)
    for (let i= 0; i < Object.keys(person3).length; i++){
        console.log(Object.keys(person3)[i])
    }
}
console.log(displayObj(person3))

//Displays all the values for the favorite dishes
for(let i = 0; i < Object.keys(person3).length; i++){

    if(Array.isArray(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.

Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

//Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `Your name is ${this.name}, and you are ${this.age} years old.`
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.addAge = (num) => {
        let addYears = num
        this.age = this.age + num
        return `${this.name} is now ${this.age}`
    }
}


  // Trying a Using a self-invoking function
function Person(name, age){
    this.name = name;
    this.age = age;    

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `Your name is ${this.name}, and you are ${this.age} years old.`
    
    }

    //self invoking function that adds one to the age each time the method is run 
    this.countUp = (function() {
        let counter = 1;
        return function() {return `Your age is now ${this.age + counter ++}`}
    })()

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.addAge = (num) => {
        let addYears = num
        this.age = this.age + num
        return `${this.name} is now ${this.age}`
    }
}

let new_person = new Person('Cindy', 60);
console.log(new_person.printInfo())
console.log(new_person.countUp())
console.log(new_person.countUp())


let new_person2 = new Person('Katie', 31);
console.log(new_person2.printInfo())
console.log(new_person2.addAge(3))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isStringBig = (str1) => {
    return new Promise((resolve, reject) => {
        if(str1.length > 10 ){
            resolve(true);
        }else{
            reject(false)
        }   
    })
}

isStringBig('this is a huge string, really big').then((result) =>{
    console.log('Big word', result)
}).catch((error) => {
    console.log('Small Number', error)
})

