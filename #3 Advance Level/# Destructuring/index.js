// // Array Destructuring   ==>  Note: array destructuring garda hamile  square brackets( i.e []  )  ko use garchau

// const alphabet = ['A', 'B', 'c', 'D', 'E', 'F']
// const numbers = ['1', '2', '3', '4', '5', '6']



// // Destructuring in the Array i.e Unpacking values from array
// const [a,, b,, ...rest] = alphabet              // yo line ko ,,  vannale skipping value  &  ...rest vannale remaing sabbai vanna khojeko i.e triple . vannale spread operator vanni janaucha     
// console.log(a)
// console.log(b)
// console.log(rest)


// // Creating a new array by spreading two arrays
// const newArray = [...alphabet, ...numbers]          // ...alphabet vannale spreading alphabet array values & ...numbers vannale spreading numbers array values
// console.log(newArray)

// // Alternative of above : Creating a new array by concatenating two arrays
// const newArray2 = alphabet.concat(numbers)
// console.log(newArray2)



// // Function batw return vayeko array value lai pani destructuring garna sakincha vanera dekhauna khojeko
// function sumAndMultiply(a, b)
// {
//     return [a+b, a*b, a/b]               // yo chai aru kei haina just arrya return gareko ho .. yesari calculate garera aayeko value chai array ma returnhuncha 
// }

// //const [sum, multiply] = sumAndMultiply(5, 5)            // [sum, multiply]  ko matlab vaneko, sumAndMultiply() method batw return vayeko array lai destructuring gareko ho and aayeko values lai  sum , multiply  vanni alag alag variable ma rakheko

// const [sum, multiply, division = 'No Divsion'] = sumAndMultiply(5, 5)        // [sum, multiply, division='No Division']  ko matlab vaneko, sumAndMultiply() method batw return vayeko array lai destructuring gareko ho and aayeko values lai  sum , multiply and division vanni alag alag variable ma rakheko

// console.log(sum)
// console.log(multiply)
// console.log(division)







// Object Destructuring         ==>  Note: oject destructuring garda hamile curly brackets ko use garchau ( i.e { } )

// Creating two objects i.e personOne & personTwo
const personOne ={
    name:   'Ram',   
    age: 25,
    address: {
        city: 'Kawasoti',
        state: 'Lumbini'
    }
}

const personTwo ={
    name:   'Hari',   
    age: 25,
    favouriteFood: 'Chicken & Mutton Gravy Meat',
    address: {
        city: 'Ghattekulo',
        state: 'Bagmati'
    }
}


// const {name, age} =  personOne      //  {name, age} chai  Object destructuring gareko ho i.e object destructuring garda object ko key and variable name same huna parcha
// console.log(name)
// console.log(age)


// //yedi object destructuring  garda object ko key vanda alik vinna varibale ma value save garna man cha vani yesari garni
// const {name: Name, age: Age, favouriteFood = 'Momo'} =  personTwo       // favouriteFood = 'Momo' yesari favouriteFood ko lagi default value pani set garna sakincha
// console.log(Name)
// console.log(Age)
// console.log(favouriteFood)


// Using Spread operator in object


// const {name: Name, ...rest} =  personTwo
// console.log(Name)
// console.log(rest)


// Destructuring in nested object
// const {name, address: { city } } =  personTwo             // address: { city }  chai destructuring in nested object
// console.log(name)
// console.log(city)


// const personThree ={  
//     age: 25,
// }

// const personFour ={
//     name:   'Lakkhan',   
//     favouriteFood: 'Chicken & Mutton Briyani',
//     address: {
//         city: 'Dhobighat',
//         state: 'Rautahat'
//     }
// }


// const personFive = {...personThree, ...personFour}      // object combining using ...spread operator  // personThree object ma navayeko or even vayeko properties lai personFour ko properties le override garcha 
// console.log(personFive)


// yo chai normal tarikale function vitra object ko key lai access garera value get gareko
// function printUser(user)
// {
//     console.log(`Name is: ${user.name} & Age is: ${user.age}`)
// }

// using object destructuring in the function to get value of the key of the object
function printUser( {name, age})     //  {name, age} chai object destructuring gareko ho
{
    console.log(`Name is: ${name} & Age is: ${age}`)
}


printUser(personOne)