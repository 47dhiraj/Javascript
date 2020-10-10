console.log('We are in tutorial7 & lets discuss about arrays');

let marks = [34, 23, 24, 93 ,73, 25]; //number typeko ko array

const fruits = ['Orange', 'Apple', 'Pineapple']; //string type ko array

const mixed = ['str', 89, [3, 5]]; // array vitra pani array xa yaha [... [3, 5]]

const arr = new Array(23,123,21, 'Orange'); // we can also create array using Array constructor function

// console.log(marks);
// console.log(mixed);
// console.log(fruits[1]); // array ma indexing pani majale hunxa

// console.log(arr.length);  //.length array ko property ho

// console.log(Array.isArray('dfdf')); // isArray le array ho ki nai check garxa 

arr[0] = 'jacky';  // modifying array vale
let arrelement = arr[0]; //accessing array value

// console.log('element :', arrelement);
// console.log(arr);

let value = marks.indexOf(73);  // indexOf le  array ma vayeko value ko index position dinxa
// console.log(value)

// Mutating or Modifying arrays using array methods

//yo method le original array lai nai change garxa
// marks.push(3564);     // push le array ko last(end) ma lagera add garxa naya value
// marks.unshift(1009);  // unshhift le array ko starting ma lagera halxa 
// marks.pop()           // pop le array ko end batw auta value or element lai hatauxa
// marks.shift()         // shift le array ko start batw auta value or element lai hatauxa
// marks.splice(2, 3);   // this mean start from index position  2 and removing upto range 3 i.e index position 4
// marks.reverse()       // array ko sabbai value lai reverse garxa i.e tini haru ko index positon nai reverse garxa

let marks2 = [1, 2,3, 7]
marks = marks.concat(marks2);  // marks array ma marks2 vanni array .concat method le jodna sakxa
// console.log(marks);

let myobj = {                //myobj auta object ho jas ma string xa, boolean value pani xa, array pani xa
    firstname: 'Dhiraj', 
    channel: 'CodeWithjacky',
    isActive: true,
    marks: [1,5,3,6],
    'last name': 'Kafle'  // yesari identifier ko name mai space dina paryo vani tyo identifier lai single quote vitra rakhni
}

// yo talako both tarika battw object vitra ko value access garna sakinxa
//One Way
console.log(myobj)
console.log(myobj.firstname)
console.log(myobj.marks)
console.log(myobj.isActive)
console.log(myobj.channel)

// 2nd Way
console.log(myobj['firstname'])
console.log(myobj['last name'])
console.log(myobj['channel'])
console.log(myobj['isActive'])
console.log(myobj['marks'])

