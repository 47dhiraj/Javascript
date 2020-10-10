/*
Exercise: 

You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/


console.log('This is tutorial 25')

// Create a new element
let divElem = document.createElement('div');    // auta naya div element banako javascript ko help batw


let val = localStorage.getItem('text');   //yedi localstorage ko text vanni key ma value xa vani val varibale ma halxa.

let text;  // auta text vanni variable banayo

if (val == null)   // yedi localstorage ko text key khali raixa vani vaneko.
{
    text = document.createTextNode('This is my element. click to edit it'); // '..text..' lai text variable ma haleko.
}
else        // yedi localstorage ko text key ma kei value raixa vani vaneko.
{
    text = document.createTextNode(val);  // val varibale ma vako  sentence or text lai text varibale ma rakheko.
}

// Add text to that created element
divElem.appendChild(text);

// Give divElement(element) the id, style and class.
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');


let first = document.getElementById('myfirst');

//divElem lai first vanda pahila rakheko
container.insertBefore(divElem, first);  // main container vitra pani : Inserting the divElement before element with id having first

// console.log(divElem, container, first)




// adding click event listener to the divElem
divElem.addEventListener('click', function () 
{
let noTextAreas = document.getElementsByClassName('textarea').length;  //textarea ma character ko length vanna khojeko.
if (noTextAreas == 0)  // yedi textarea khali (number of Text area == 0) i.e text area ma character rainxa vani.
{
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
}

//listen for the blur event on textarea( text area ma type garna xodera bahira click garda vaneko)  
let textarea = document.getElementById('textarea');
textarea.addEventListener('blur', function () 
{
    elem.innerHTML = textarea.value;  // yo code le chai textarea.value ma lekheko kura lai divElem ko innerHTML ma lagera set or display garxa before reloading the webpage

    localStorage.setItem('text', textarea.value);
     

    //Mathi ko line ko alternative code ho yo
    //localStorage.setItem('text', elem.innerHTML);
})

});