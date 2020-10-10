
// Variables banaune tarika

// var, let, const  keyword batw hamile variable banauna sakinxa

// var chai mostly global scope ko lagi use garinxa

// const chai mostly kei kura constant rakhna ko lagi use garinxa

// let chai kunai particular block {}  or kunnai varibale  pahilai gloabal xa re... feri tei naam ko varibale lai locally pani use garna ko lagi let use garinxa



// aajakal ko modern javascript ma let & const use garinxa

var name = 'Dhiraj'; // name auta string variable ho...  Dhiraj actual naam vai halyo ..quotation '' use garepani hunxa  or "" use gare pani hunxa

var channel; // just varibale declaration gareko
var marks = 3454; // number declaration gareko
marks = 90;

channel = 'Code With Harry'
console.log(name, channel, marks);
// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Kathmandu';
console.log(city);

const ownersName = 'Hari Ram';

// ownersName = 'Harry'; // Cannot do this (error)...i.e ownersName is a constant identifier so it's value cannot be overridden

console.log(ownersName);
const fruit = 'Orange';

{
 let city = 'Rampur';   // yaha let keyword use garera city chai hamile block level or local variable banako  
 city = 'Kolkata';
 console.log(city);   // yaha chai Rampur display aauxa console ma because here city is local variable
}

console.log(city); // here city keyword is global variable so yaha chai kathmandu aauxa console ko display ma


const arr1 = [12,23,12,53, 3]; // But But be careful hamile le array lai const banayera kei kura paxi add garna sakxam but completely naya arr1 = [ 1,2,3,4,5] chai banauna sakdainau ... naya banauna ko lagi array lai let or var declare garnu parxa

arr1.push(45);  // adding value to constant array

console.log(arr1)

/* Most common programming case types:

1. camelCase 

    example : hiDhiraj

2. kebab-case

    example : hi-dhiraj

3. snake_case 

    exmaple : hi_dhiraj

4. PascalCase 

    example : HiDhiraj

*/