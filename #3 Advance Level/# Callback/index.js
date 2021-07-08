console.log("This is tutorial 37");

// With using Callback() only
// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]


function enrollStudent(student, callback)       //enrollSutdent() vanni function ho jasle parameter ma aua json object & arko callback function lai lincha 
{
        students.push(student);

        console.log("Student has been enrolled");

        callback();  
             
}

function getStudents()
{
        let str = "";
        students.forEach(function(student)              
        {
            str += `<li> ${student.name}</li>`
        });

        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
   
}


let newStudent = {name:"Sunny", subject:"Python"}           // newStudent vanni auta javascript object banako

enrollStudent(newStudent, getStudents);             // yo line ko getStudents chai auta callback function ho because yo chai enrollstudent() vanni function ma as a parameter ko rup ma pass vai rako cha





// // Using Callback() and SetTimeout()

// // Pretend that this response is coming from the server
// const students = [
//     {name: "harry", subject: "JavaScript"},
//     {name: "Rohan", subject: "Machine Learning"}
// ]


// function enrollStudent(student, callback)       //enrollSutdent() vanni function ho jasle parameter ma aua json object & arko callback function lai lincha 
// {
//     setTimeout(function()               // yo setTimeour() vanni function certain seconds of time pachi background ma run huncha
//     {
//         students.push(student);

//         console.log("Student has been enrolled");

//         callback();  // jaba samma enrollStudent() vanni method run vayera aafno kaam sakdaina taba samma yo callback() function kunai halat ma run hudaina (i.e callback function ko setTimeout yo enrollStudent method ko setTimeout vanda less vayeta pani kunai baal matlab chaina... pahila enrollStudent() ko kaam sakinai parcha) 

//     }, 5000);               
// }



// function getStudents()
// {

//     setTimeout(function() 
//     {
//         let str = "";
//         students.forEach(function(student)              
//         {
//             str += `<li> ${student.name}</li>`
//         });

//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 3000);

// }


// let newStudent = {name:"Sunny", subject:"Python"}           // newStudent vanni auta javascript object banako

// enrollStudent(newStudent, getStudents);             // yo line ko getStudents chai auta callback function ho because yo chai enrollstudent() vanni function ma as a parameter ko rup ma pass vai rako cha


