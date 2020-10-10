let str = "javascript";  // auta string banako 
let links = document.links;  // yo index.html ma vako sabbai link lai links vanni variable ma haleko

// console.log(links);

let href;      // auta variable banako

Array.from(links).forEach(function(element)         //auta function banako jasle hamro page ko sabbai links lai linxa
{
  href = element.href;
  if (href.includes(str)) 
  {
    console.log(href);
  }
});


