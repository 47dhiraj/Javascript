console.log("This is tutorial 28");

// Object literal way batw banako ko object ko direct prototype change garna mildaina... 
// let obj = {
//     name: "harry",
//     channel: "Code With Harry",
//     address: "Mars"
// }

// constructor banako 
function Obj(givenName)
{
    this.name = givenName;
}

// mathi banako constructor ko prototype i.e (getName) lai acces gareko
Obj.prototype.getName = function ()
{
    return this.name;
}
// mathi banako constructor ko prototype i.e (setName) lai acces garera  naya value set garna khojeko
Obj.prototype.setName = function (newName)
{
  this.name = newName;
}

let obj2 = new Obj("Rohan Das");      // constructor ko help batw object banako
console.log(obj2);


 