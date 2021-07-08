console.log("this is Tutorial31.js");

class Employee   //Employee class banako
{
    constructor(givenName, givenExperience, givenDivision) //Constructor banako which accept parameters
    {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan() // functioin banako
    {
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear()  // functioin banako
    {
        return 2020 - this.experience;
    }

    static add(a, b)  //static method can be called without creating an object
    {
        return a + b;
    }

}

// harry = new Employee("Harry", 56, "Division");  // calling Employee Constructor
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))   // calling static method without creating object, just using class name 

class Programmer extends Employee  //inherting Employee (Parent) class 
{
    constructor(givenName, givenExperience, givenDivision, language, github) //programmer class ko constructor banako
    {
        super(givenName, givenExperience, givenDivision);  //calling super class(Employee) or parent class constructor
        this.language = language;
        this.github = github;
    }

    favoriteLanguage()
    {
        if (this.language == 'python')
        {
            return 'Python';
        }
        else
        {
            return 'JavaScript';
        }
    }

    static multiply(a, b)
    {
        return a * b;
    }
}


rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7)); //calling static method by using Class name