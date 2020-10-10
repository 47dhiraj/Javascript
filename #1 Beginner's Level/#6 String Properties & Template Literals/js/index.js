//String properties , methods & string literal

console.log('We are at tutorial 6');
const name = 'Dhiraj';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2'); // concat le existing string ma aru user le jati string diye pani concat garxa
console.log(html);
// console.log(html.length);   // tala ko jati pani string properties xa tini haru le permanently string lai change gardaina...i.e previous permanent string lai nagitholi kaam garxa
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());  
// console.log(html);  // suru ko html jato thiyo testai xa vanera check garna ko lagi gareko


// console.log(html[1]);   // yesari string varibale ko indexing batw value pani herna sakinxa

// console.log(html.indexOf('<'));  // string variable ko kunnai character ko first index position yestari herna sakinxa
// console.log(html.lastIndexOf('<')); // string variable ko kunnai character ko last index position yestari herna sakinxa
// console.log(html.charAt(3));   // charAt le chai index postion batw kun character xa tei character lai display garxa

// console.log(html.endsWith('str2'));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));  // total string vari search garxa kunnai word or character lai & xa vani tyo word "true" return garxa

// console.log(html.substring(1,6)); // string ko range i.e 1 to 6 ma vayeko substring disply gareko ho
// console.log(html.slice(0, 4)) // slice ko kaam pani substring jastai ho.. yesle mathi ko jasari range diyera pani kaam garna sakxa & also negative number diyera pani last batw substring nikalera dina sakxa
//console.log(html.slice(-4))

// console.log(html.split('>'));  // split le string batw substring lai tukra tukra pare ra array banayera dinxa.. i.e jaha jaha user le diyeko symbol for eg: (ahile ko lagi '>') xa tyaha batw substring tukraune kaam garxa

// console.log(html.replace('this', 'it')); // string ko property replace le first occurence word lai matra replace garxa i.e yaha first occurence of this lai matra it le replace garxa

let fruit1 = 'Orange\''; // orange paxadi single quote lekhna ko lagi back slash lekheko ... but tala Template literal vitra yesto lekhna ko lagi yesto jhyau garnu pardaina 
let fruit2 = 'Apple';

// yo talako back tick ``  vitra lekheko kura lai Template Literal vaninxa
// Template literal vitra HTML vanda majale different tarika le lekhna sakinxa... i.e HTML lai modify pani garna sakinxa
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;        