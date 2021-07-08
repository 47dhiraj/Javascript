console.log("Synchronous Execution vs Asynchronous Execution");

// Synchronous Execution
// for (let index = 0; index < 4005; index++) 
// {
//     console.log("This is index number" + index);
// }

// console.log('done printing');



// Asynchronous Excecution
setTimeout(() => {                                // setTimeout() chai Javascript ko function ho  //setTimeout() Executes a function, after waiting a specified number of milliseconds.
    for (let index = 0; index < 4005; index++) 
    {
        console.log("This is index number" + index);
    }
}, 1);                    // yo line ko 1 chai milli seconds ho i.e 1 millisecond yo function run nagarne.. talako run garni... jaba 1 millisecond huncha ani yo function run garna thalni vaneko

console.log('done printing');
