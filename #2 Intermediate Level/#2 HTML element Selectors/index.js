console.log('Welcome to tutorial 14');
/*
element selectors:
1. Single element selector
2. Multi element selector

*/

// 1. Single element selector :
// CSS ko kaam javascript batw pani garna sakinxa
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Jackie is a good boy';
element.innerHTML = '<b>Jackie is a good boy</b>';  // .innerHTML ko help batw  hamile HTML tag lai pani use garna sakinxa so tesko functionality pani access garna paiyo.
// console.log(element.innerText);


let sel = document.querySelector('#myfirst');  // id i.e(#myfirst) select gareko
sel = document.querySelector('.child');   // class i.e(.child) ko first element lai matra select garxa
sel = document.querySelector('div');   // HTML ko tag pani select garna sakinxa i.e div ,First div tag lai matra select garxa
sel.style.color = 'green';
console.log(sel)

// 2. Multi element selector :

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems)

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
   element.style.color = 'blue'; 
}


// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue'; 
// });
// console.log(elems[0].getElementsByClassName('child'))