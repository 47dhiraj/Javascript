console.log('This is my tutorial 42');

// // Button with id myBtn
// let fetchBtn = document.getElementById("fetchBtn");

// fetchBtn.addEventListener('click', getData)

// console.log("Before running getData")

// // div with id content 
// let content = document.getElementById("content");


// Example 1: GET method from text file

// function getData()
// {
//     console.log("Started getData")

//     url = "local_file.txt";


//     // Use of Fetch API Call   // Fetch API call asynchronous tarikale background ma run vai rako huncha
//     fetch(url)              // yo fetch le auta promise return garcha containing a response
//     .then((response)=>{        //fetch le return gareko resolved promise ko HTTP respons yo then ma huncha
//         console.log("Inside first then")
//         return response.text();
        
//         //return response.json();
//     })
//     .then((data)=>{         // yo second then ko kaam vaneko actually work with the actual data receive from HTTP response
//         console.log("Inside second then")

//         str = "";               // Javascript blank string variable 

        
//         str += `<li> ${data} </li>`;    // Backticks are commonly used for multi-line strings or when you want to interpolate an expression within your string.   // javascript variable ma HTML code lai hold garayera rakheko
       

//         content.innerHTML = str;  

//         console.log(data);          
//     })
// }

// console.log("After running getData")


// Example 2: GET method from url location

// function getData()
// {
//     console.log("Started getData")
    
//     url = "https://api.github.com/users";

//     fetch(url)
//     .then((response)=>{
//         console.log("Inside first then")
//         return response.json();     // response.json() vannale, server batw data aauda string format ma aaucha teslai parse garera json format ma lageko
//     })
//     .then((data)=>{     // yo line ma aaune data pani json ko format ma cha because mathi aayeko response lai json ma lageko cha using response.json()
        
//         console.log("Inside second then")

//         str = "";               // Javascript blank string variable 

//         for (key in data)
//         {
//             str += `<li>${data[key].login} </li>`;    // Backticks are commonly used for multi-line strings or when you want to interpolate an expression within your string.   // javascript variable ma HTML code lai hold garayera rakheko
//             str += `<li>${data[key].id} </li>`;
//             str += `<li>${data[key].node_id} </li>`;
//             str += `<li>${data[key].avatar_url} </li> <br>`;
//         }

//         content.innerHTML = str;   

//         console.log(data);
//     })

// }
// console.log("After running getData")



// Example 3: POST method


// Button with id myBtn
let postBtn = document.getElementById("postBtn");

postBtn.addEventListener('click', postData)

console.log("Before running getData")



function postData()
{
    url = "http://dummy.restapiexample.com/api/v1/create";

    // data = '{"name":"gedajasto47","salary":"473","age":"26"}'      // hamile json object lai single quote vitra rakheko chai i.e aba chai yo data string format ko vayo.. yedi single quote ma nrakhi json object ma vako vaye... fetch api ko body ma data pathauda teslai stringify garna parthyo
    data = {"name":"dimaghyang47","salary":"123","age":"23"}

    fetch(url, {
        method:'POST',				/* yo url ma hit hanne method vaneko chai POST method ho vanna khojeko*/
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify({'data':data})			/* yesarri body ma json object vitra key value pair(i.e 'title':title) pani pathako cha*/
    })
    .then(response=> response.json())
    .then(data => console.log(data))
}
