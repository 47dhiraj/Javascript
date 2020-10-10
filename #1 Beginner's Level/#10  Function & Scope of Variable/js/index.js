console.log('this is tut 10');

// Detai About Scope of variable

// let variable ko scope block level hunxa
// const varibale ko scope pani block level hunxa
// var varibale ko scope chai Global level huxa

if(1){
    let i =234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("jacky"), i)


// const mygreet = function(name, thank='Thank You')   // yaha mygreet variable ma anonymous  function (i.e name navako function) xa
// {
//     let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;

//     return msg;  // returning value from function

// }

// let name = 'SkillF';

// let val = mygreet(name, 'Thanks a lot');  // we can also call  varibale  like a function in Javascript 
// console.log(val);


// const myobj = {
//     name: "SkillF",
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myobj.game())

// arr = ['fruit', 'vegetable', 'furniture'];

// arr.forEach(function(element, index, array) {
//     console.log(element, index)
// });    