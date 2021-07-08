console.log("This is tutorial 27");

//Object Literal for creating objects (Yesari object banauna sakinxa but yesari nabanaune ..use constructor)
// let car = {
//   name: "Maruti 800",
//   topSpeed: 89,
//   run: function() {
//     console.log("car is running");
//   } 
// };




// we have already seen inbuilt constructors like these:
// new Date();        // new keyword is used to create new object


// Creating a user defined constructor for cars
function GeneralCar(givenName, givenSpeed)     // constructor having givenMame & givenSpeed parameters.
{

this.name = givenName;
this.topSpeed = givenSpeed;
this.run = function() 
{
  console.log(`${this.name} Is Running`);
};

this.analyze = function() 
{
console.log(
  `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
);
};

}


//Creating new objects by calling GeneralCar constructor by passing arguments
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);