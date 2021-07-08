//Promises are used to handle asynchronous operations in JavaScript. First of all, a Promise is an object. A promise object can be created using Promise constructor. 



// Syntax of Promise Constructor
// var promise = new Promise(function(resolve, reject){
//      //do something
//
//      if(certain condition) 
//      { 
//       resolve(); 
//      } 
//      else 
//      { 
//      reject(); 
//      } 
//
// });



// Syntax of Promise Consumers
// promise.then(function()
// {
//     // do something
// }).catch(function()                        
// {
//     // do something
// })




//A Promise has four states:
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected


// Parameters
// Promise constructor takes only one argument,a callback function.
// Callback function takes two arguments, resolve and reject
// Perform operations inside the callback function and if everything went well then call resolve.
// If desired operations do not go well then call reject.



// Example 1:

// function func1() 
// {
//     return new Promise(function (resolve, reject)       // yo line ko Promise chai Promise constructor ho
//     {
//         setTimeout(() => {  
//             const error = true;
//             // const error = false;

//             if (!error) 
//             {
//                 console.log('Function: Your promise has been resolved')
//                 resolve();          // calling resolve()  // resolve call hunu vaneko .then() vitra ko function call hunu ho
//             }
//             else 
//             {
//                 console.log('Function: Your promise has not been resolved')
//                 reject('Sorry not fulfilled');      // // calling reject()  // reject call hunu vaneko .catch() vitra ko function call hunu ho
//             }
//         }, 2000);

//     })
// }

// func1().then(function()
// {
//     console.log("Harry: Thanks for resolving")
// }).catch(function(error)                        // yo line ko error vannale as parameter ko rup ma ho i.e sorry not fulfilled vanni string aaucha yo parameter ma)
// {
//     console.log("Harry: Very bad bro. Reason: " + error)
// })


// // Alternative
// // func1().then(function()
// // {
// //     console.log("Harry: Thanks for resolving")
// // }, function(error)                        // yo line ko error vannale as parameter ko rup ma ho (i.e "sorry not fulfilled" vanni string aaucha yo parameter ma)
// // {
// //     console.log("Harry: Very bad bro. Reason: " + error)
// // });





// Example 2:

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) 
{
    return new Promise(function (resolve, reject) 
    {
        setTimeout(function () 
        {
            students.push(student);
            console.log("Student has been enrolled");

            const error = false;

            if (!error) 
            {
                resolve();
            }
            else 
            {
                reject();
            }
        }, 1000);
    })

}

function getStudents() 
{
    setTimeout(function () 
    {
        let str = "";
        students.forEach(function (student) 
        {
            str += `<li> ${student.name}</li>`
        });

        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 2000);

}

let newStudent = { name: "Sunny", subject: "Python" }

enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});


// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
