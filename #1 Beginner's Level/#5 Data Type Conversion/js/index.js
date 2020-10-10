// Type conversion 
console.log('Welcome to Type Conversioin Tutorial');

let myVar;
myVar = 34;
console.log(myVar); // myVar number type ko variable ho yah

console.log(myVar, (typeof myVar));  // myVar ko actual value & tesko type lai console garera display gareko

myVar = String(34);   // number type lai string type ma convert gareko.. i.e Type Conversion
console.log(myVar, (typeof myVar));

let boooleanVar = true;   // boolean data type
console.log(boooleanVar, typeof(boooleanVar));


let booleanVar = String(true);  // boolean datatype lai Type Conversion ko help batw string data type ma lageko
console.log(booleanVar, (typeof booleanVar));

let date = new Date();
console.log(date, typeof(date));


let daate = String(new Date());
console.log(daate, (typeof daate));

let arr =  [1,2,3,4,5];
console.log(arr.length, arr, (typeof arr));  // array data type huda ko length 5 cha

let arrr =  String([1,2,3,4,5]); // mathi ko array lai type conversion ko help batw string ma convert gareko
console.log(arrr, arrr.length, (typeof arrr)); // string vai sake paxi length chai 9 hnxa,, i.e vitra ko comma pani ganinxa 
 
let i = 75;
// console.log(i.toString())  // yesari toString ko help batw pani hamile type conversion garna sakxau

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);