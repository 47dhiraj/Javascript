console.log("This is tutorial 17 on events");

document.getElementById("heading").addEventListener("click", function(e)  // yaha lekheko "click" javascript ko event ho
{
  let variable;
  console.log("You have clicked the heading");
  //console.log(e);
  variable = e.target;  // target vanna le user le jaha event  garauxa teslai target vaninxa
  variable = e.target.className;
  variable = Array.from(e.target.classList);   // DOM token list lai array banayera herne tarika

  variable = e.target.id;
  variable = e.offsetX;  // Element ko relative position ma kati para event occur gareko vanni kura ho
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);

});


document.getElementById("heading").addEventListener("mouseover", function(e) //yaha lekheko "mouseover" javascript ko event ho
{
  
  console.log(e);
  
});