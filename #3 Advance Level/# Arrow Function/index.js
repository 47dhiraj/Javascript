console.log('this is tutorial 41');

// Creating a regular function
// const harry = function ()
// {
//     console.log("This is the best person ever")
// }

// function returning something
// const greet = function()
// {
//     return "Good Morning";
// }



// ARROW FUNCTIONS

// Converting above normal function to an arrow function
// const harry = ()=>
// {
//     console.log("This is the best person ever")
// }
// harry();


// One liners do not require braces/return
// one line will automatically return
// const greet = () =>  "Good Morning";

//We can also return object in one line statement 
// const greet = () =>  ({name: "harry"});


// Single parameters do not need parenthesis 
const greet = name =>  "Good Morning " + name;
console.log(greet('Harry'))

// but you will have to put parenthesis if there are multiple paramteres
const greet = (name,ending) =>  "Good Morning " + name + ending;
console.log(greet('Harry ', ' Bhai'))
