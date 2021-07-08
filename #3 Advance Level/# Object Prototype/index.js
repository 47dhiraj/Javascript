console.log("This is tutorial 30");


const proto = {                           // proto vaneko auta prototype banayeko  
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}


// This creates harry object
let harry = Object.create(proto);      // object.create() method is used to create a new object with the specified prototype and properties // proto vanni  prototype batw harry vanni new object banako

harry.name = "harry";                  // harry object ko name ma harry naam rakheko
harry.role = "Programmer";
harry.changeName("Harry2")           // harry object ko name lai yesari function call garera pani change garna sakinxa
// console.log(harry)



// This also creates harry object  (Old Method)
// const harry1 = Object.create(proto, {
//     name: { value: "harry", writable: true },   // writable : true le name lai feri change garna dinxa
//     role: { value: "Programmer" },
// });
// harry1.changeName("Harry2")
// console.log(harry1)




// Creating an Employee constructor
function Employee(name, salary, experience) 
{
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Creating Employee prototype (Slogan)
Employee.prototype.slogan = function ()         // Employee ko prototype ma slogan vanni function add garko.... yesari pani add garna sakincha
{
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan())

// Programmer Constructor banako
function Programmer(name, salary, experience, language) 
{
    Employee.call(this, name, salary, experience);      //calling employee constructor
    this.language = language;
}

// Inheriting the prototype from Employee to  the Programmer
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the prototype constructor of programmer
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);