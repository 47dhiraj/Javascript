// 8 Javascript methods you must know


// 1)  Filter Method        ==> The filter() method is a pure function and does not change the original array instead it will return a new array that satisfies the requirement of the provided function in the argument.
                                //  NOTE : Javascript filter() does not execute the function for array elements without any values.
// Example 1:

// const items = [                                 // yo items vanni auta array ho
//     { name: 'Bike', price:100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 }
// ]


// const filterdItems = items.filter((item) => {              // khas ma filter() method le auta functin lincha,,, yaha function ka naam diyeko chaina just parameter pass gariyeko cha ( i.e (item)  )
//     return item.price <= 100                 // yaha batw Boolean value return hunxa i.e TRUE or FALSE
// })


// console.log(items)      //yo filter() method le previous array lai kei chaina gardaina.. jasta ko testai original kei nagari rakhi rako huncha

// console.log(filterdItems)       // filter() vayera aayeko naya array


// // Example 2:

// var ages = [32, 33, 12, 40];            // ages vanni auta array ho

// function checkAdult(age)                // ages vanni array batw value aaucha one by one
// {
//   return age >= document.getElementById("ageToCheck").value;        //yedi array ko age value greater than minimun age, then return that array value
// }

// function myFunction()           // Try it button click garda yo method call huncha
// {
//   document.getElementById("demo").innerHTML = ages.filter(checkAdult);              // filter() method le checkAdult() vanni method call garcha & automatically yo method ma ages vanni array ko values one by one as a paramter ko rup ma pathaucha
// }



//  2)  Map Method              ==>  The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order.
                                    //  Note: map() does not execute the function for array elements without values.

// Example 1:
// const items = [                                 // yo items vanni auta array ho
//     { name: 'Bike', price:100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 }
// ]



// const itemNames = items.map((item) => {                 // itemsNames vanni auta naya array banako & yesma chai orginal array ko item haru ko name matra rakhna khojeko      
//         return item.name
// })

// const itemPrices = items.map((item) => {              // itemsNames vanni auta naya array banako & yesma chai orginal array ko item haru ko price matra rakhna khojeko
//     return item.price
// })

// console.log(itemNames)
// console.log(itemPrices)




//  3) Find Method

// The find() method executes the function once for each element present in the array:
// 1.  If it finds an array element where the function returns a Boolean value(TRUE or FALSE), find() returns the value of that array element (and does not check the remaining values)
// 2.  Otherwise it returns undefined.

// const items = [                                 // yo items vanni auta array ho
//         { name: 'Bike', price:100 },
//         { name: 'TV', price: 200 },
//         { name: 'Album', price: 10 },
//         { name: 'Book', price: 5 },
//         { name: 'Phone', price: 500 },
//         { name: 'Computer', price: 1000 },
//         { name: 'Keyboard', price: 25 }
// ]


// const foundItem = items.find((item) => {                 
//         return item.name === 'Computer'         // yedi item vetyo vani yaha batw boolean value (TRUE or FALSE) return vai rako huncha
// })

// console.log(foundItem)




//  4)  forEach Method:

// const items = [                                 // yo items vanni auta array ho
//     { name: 'Bike', price:100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 }
// ]


// items.forEach((item) => {                 
//         console.log(item.name)
//         console.log(item.price)        
// })


//  5) Some method      ==> some method le, kei array item le condition fullfill gare pani true return garcha

// const items = [                                 // yo items vanni auta array ho
//     { name: 'Bike', price:100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 10000 },
//     { name: 'Keyboard', price: 25 }
// ]


// const hasFreeItems = items.some((item) => {                 
//     return item.price < 0             
// })
// console.log(hasFreeItems)


// const hasCheaperItems = items.some((item) => {                 
//     return item.price > 0 && item.price <= 1000        
// })

// console.log(hasCheaperItems)


// const hasExpensiveItems = items.some((item) => {                 
//     return item.price >= 10000       
// })

// console.log(hasExpensiveItems)


//  6)  Every methhod       ==> all array item le condition fullfill gare matra true return garcha

// const items = [                                 // yo items vanni auta array ho
//     { name: 'Bike', price:100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 10000 },
//     { name: 'Keyboard', price: 25 }
// ]


// const hasAllItems = items.every((item) => {                 
//     return item.price <= 10000             
// })
// console.log(hasAllItems)




// 7) Reduce Method             ==>  The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). The return value of the function is stored in an accumulator (result/total).


// const items = [                                 // yo items vanni auta array ho
//     { name: 'Bike', price:100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 10000 },
//     { name: 'Keyboard', price: 25 }
// ]

// const total = items.reduce((currentTotal, item) => {            // Finally, at last, yo line ko currentTotal ko value total vanni variable ma jancha             
//     return currentTotal + item.price            // yaha batw return vako value feri ghumera tei mathi ko reduce method ko currentTotal ma jancha  
// }, 0)
// console.log(total)

























