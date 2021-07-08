console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() 
{
    console.log('You have clicked the fetchBtn');


    // // USE THIS FOR GET REQUEST ....

    // // Instantiate an xhr object    // aut xhr object banaunai parcha 
    // const xhr = new XMLHttpRequest();           // XMLHttpRequest() javascript ko inbuilt method for creating a new xhr object

    // // GET ko matlab url or location batw only data fetch garni
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);           // GET method batw tyo location url ko data fetch garni vaneko.... true matlab asynchronous type ma kaam hunxa(i.e blocking hudaina aru kam lai)  ... false matlab synchronous type ko kaam hunxa(i.e blocking hunxa... auta kaam sakiye pachi arko suru hune ) 


    // // There are various method related with xhr object .. some of them are :
    // // 1) xhr.open()
    // // 2) xhr.getResponseHeader()
    // // 3) xhr.onprogress()
    // // 4) xhr.onreadystatechange()
    // // 5) xhr.onload()
    // // 6) xhr.send()

    // // What to do on progress (optional ho.. i.e ajax call ko progress lai track garna man cha vani)
    // xhr.onprogress = function()
    // {
    //     console.log('On progress');
    // }


    // // xhr.onreadystatechange = function ()         // yo pani optional ho.. XMLHttpRequest.readyState ma 5 ota state vitra vitra kaam vai rako hunxa, tei state change huda kei kaam garna man cha vani garna sakincha ..garna man lage gare vo.. na man lage nagare vo
    // // {
    // //     console.log('ready state is ', xhr.readyState);
        
    // // }


    // // What to do when response from server is ready
    // xhr.onload = function ()                // obload ko matlab sabbai ready state saki sakyo ... ava xhr object ma vayeko response lai load garna sakincha vaneko
    // {
    //     if(this.status === 200)     // yedi ajax le response dida kei error aako chaina vani ... i.e status === 200 vannale status OK vanne bujinxa http ma
    //     {

    //         console.log(this.responseText)
    //     }
    //     else
    //     {
    //         console.log("Some error occured")
    //     }
    // }


    // xhr.send();          // Sending AJAX request // yo code generally last ma lekhincha, xhr object ko mathi harek kura define gare pachi, send garni vanera yesari lekhincha. yo code nalekhi mathi ko xhr ko kunai pani method run hudaina .. sending the request of xhr object and we also can pass the parameter while sending the xhr object request
 
    // console.log("Sending GET Request.Working !!");        // Since hamro asynchronous method batw ajax call vai rako cha.. so line ko console code without block run huncha






    // // USE THIS FOR POST REQUEST .....

    // // Instantiate an xhr object    // aut xhr object banaunai parcha 

    // const xhr = new XMLHttpRequest();           // XMLHttpRequest() javascript ko inbuilt method for creating a new xhr object
    
    // // POST ko matlab url or location ma data pani pathaune... ani tyo pathayeko data anusar response aaune khalko 
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
 
    // xhr.getResponseHeader('Content-type', 'application/json');      //tyo mathi ko post request jani wala url le json object lai matra accept garne khalko cha so, application/json vananle post request garda params orr parameter chai JSON object pathauna parcha vaneko


    // // What to do on progress (optional ho.. i.e ajax call ko progress lai track garna man cha vani)
    // xhr.onprogress = function()
    // {
    //     console.log('On progress');
    // }


    // // xhr.onreadystatechange = function ()         // yo pani optional ho.. XMLHttpRequest.readyState ma 5 ota state vitra vitra kaam vai rako hunxa, tei state change huda kei kaam garna man cha vani garna sakincha ..garna man lage gare vo.. na man lage nagare vo
    // // {
    // //     console.log('ready state is ', xhr.readyState);
        
    // // }


    // // What to do when response from server is ready
    // xhr.onload = function ()                // obload ko matlab sabbai ready state saki sakyo ... ava xhr object ma vayeko response lai load garna sakincha vaneko
    // {
    //     if(this.status === 200)     // yedi ajax le response dida kei error aako chaina vani ... i.e status === 200 vannale status OK vanne bujinxa http ma
    //     {

    //         console.log(this.responseText)
    //     }
    //     else
    //     {
    //         console.log("Some error occured")
    //     }
    // }


    // // send the request
    // params = `{"name":"test5c215","salary":"123","age":"23"}`;       // JSON object as parameter pathako cha.. (i.e key value pair ma pathako cha ) 

    // xhr.send(params);           // Sending AJAX request // parameter pani pathako cha  // yo code generally last ma lekhincha, xhr object ko mathi harek kura define gare pachi, send garni vanera yesari lekhincha. yo code nalekhi mathi ko xhr ko kunai pani method run hudaina .. sending the request of xhr object and we also can pass the parameter while sending the xhr object request
 
    // console.log("Sending POST Request !!");        // Since hamro asynchronous method batw ajax call vai rako cha.. so line ko console code without block run huncha

}       // closing brace of buttonClickHandler()





let popBtn = document.getElementById('popBtn');

popBtn.addEventListener('click', popHandler);

function popHandler() 
{
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response from server is ready  
    xhr.onload = function () 
    {
        if(this.status === 200)
        {
            let obj = JSON.parse(this.responseText);            // When receiving data from a web server, the data is always a string. Parse the data with JSON.parse() , and the data becomes a JavaScript object.    
            console.log(obj);

            let list = document.getElementById('list');

            str = "";               // Javascript blank string variable 

            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;    // Backticks are commonly used for multi-line strings or when you want to interpolate an expression within your string.   // javascript variable ma HTML code lai hold garayera rakheko
            }

            list.innerHTML = str;       // list vanni id vayeko element ko inner html ma str variable ma vayeko HTML content rakh vaneko
        }
        else
        {
            console.log("Some error occured")
        }
    }

    
    xhr.send();             // Sending AJAX request

    console.log(`We are done fetching employees!`);
    
}

