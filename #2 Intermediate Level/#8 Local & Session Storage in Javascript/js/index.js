console.log('This is tutorial 20');

//LOCAL STORAGE DETAIL (Local Storage long term samma harom local browser ko storage ma rahi rahanxa)

let impArray = ['adrak', 'pyaz', 'bhindi'];

//window.localStorage();
//typeof window.localStorage();

//Pahila local storage ma Key value pair set (Add) garni then only get item garyo vani herna milxa.

// //To Add a simple key-value pair inside local Storage .
 localStorage.setItem('Name', 'Jackie');          // yaha Name chai Key ho Jackie chai value ho
// localStorage.setItem('Name2', 'Rohan');          // yaha Name2 chai Key ho Rohan chai value ho



//Very IMPORTANT --> jahile pani vast object like(array) ma vako data local storage ma halda JSON.stringify garera key-Value pair set garni !!
localStorage.setItem('Sabzi', JSON.stringify(impArray));  //JSON.stringify use nagareko vaye tyo array ma vako sabbai element lai simply autai string jhai garera rakhthyo... JSON.stringify use gare paxi JSON string format ma rakhxa so that paxi feri teslai as earlier array ma convert garna sakinxa vanera .

// Clears the entire local storage
// localStorage.clear();  // purrai local storage lai khali garxa


// Clear a particular key-value pair
// localStorage.removeItem('Name2');


//For retrivation of simple data from local storage.
let name = localStorage.getItem('Name');

//For retirvation of objective data collection  use JSON.parse method which accepts string and convert it to object. 
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name)



// SESSION STORAGE DETAIL (Session storage browser close gare paxi aafai hatxa)

// sessionStorage.setItem('sessionName', 'sJackie');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));