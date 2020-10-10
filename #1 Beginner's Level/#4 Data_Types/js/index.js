// Two Major Types of Data Types

// 1> Primitive data types --> memory allocation Stack ma hunxa

// String
let name = "Dhiraj";
console.log("My string is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// 2> Reference Data Types ko --> memory allocation Heap ma hunxa

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    jacky: 89,
    macky: 36,
    juliya: 34
}
console.log( typeof stMarks);


//functions

function findName() {
    
}
console.log( typeof findName);


//Dates

let date = new Date();
console.log( typeof date);
