console.log("Welcome to tutorial number 23");


let x = 3;
let y = 6;
let z;
z = x+y;
z = x-y;
z = x*y;
z = x/y;     // C, C++ ma jasto quotent float ma aayo vani integer matra aaune gardaina.... float mai quotent ans dinxa.



// Exploring the Math object

z = Math;    // yaha Math chai javascript ko inbuilt keyword ho,,,,javascript ma vaye varko math objects haru z ma janxa

z = Math.PI;    // where PI is  3.14159
z = Math.E;    // where E is Euler's Number i.e  e = 2.718281828459045

z = Math.round(5.4);  // .5 or .5 vanda thulo decimal valu xa vani,number 1 le increment hunxa else same previous number .
z = Math.ceil(5.3);  // .jati decimal valu vaye pani, integer number 1 le increment hunxa.

z = Math.floor(5.3);  //.jati decimal valu vaye pani, integer number 1 le decrement hunxa.
z = Math.floor(-5.3); //negative ko lagi pani .jati decimal valu vaye pani, integer number 1 le decrement nai hunxa.

z = Math.abs(-5.3); // negative number vaye positive garauxa , positive vaye jastako testai xodxa.
z = Math.abs(5); 

z = Math.sqrt(64); // square root of any number nikalxa.
z = Math.sqrt(49);

z = Math.pow(2, 3);  // yo vaneko 2^3 i.e (2 ko power 3 ) ho.

z = Math.min(2, 3, 34,234, 2342,34); //.min le smallest number return garxa.
z = Math.min(2, 3, 34,234, 2342,-34);
z = Math.max(2, -3, 34,234,34);  //.max le greatest number return garxa.



// //RANDOM NUMBER GENERTAION

//For Float Random Number Generation
z = Math.random();  //random number by default generate garda  0 to 1 ko range ma float value generate garxa.

a = 10*Math.random();  // Random number in range between 0 to 10
b = 50*Math.random();   // Random number in range between 0 to 50
c = 100*Math.random();  // Random number in range between 0 to 100
d = 50 + 50*Math.random(); // Random number in range between 50 to 100

console.log(a);
console.log(b);
console.log(c);
console.log(d);


// For Integer Random Number Generation
 
a= Math.ceil(10*Math.random()); // Integer Random number in range between 0 to 10
b= Math.ceil(50*Math.random());  // Integer Random number in range between 0 to 50
c= Math.ceil(100*Math.random());  // Integer Random number in range between 0 to 100
d= Math.ceil(50 + 50*Math.random())  /// Integer Random number in range between 50 to 100


console.log(a);
console.log(b);
console.log(c);
console.log(d);


//For understanding how to make random range in range of 0 to 100
// a = (0, 1)
// a100 = a*100 = (0, 100)
// a10_100 = 10+a*(100 - 10)


