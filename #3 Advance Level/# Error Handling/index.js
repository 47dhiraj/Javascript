console.log("This is tutorial 44");

// Pretend the value of a is coming from a server as response
let a = "Harry bhai";
// let a = undefined;

// Example 1 : Handling Error in Javascript
if (a !=undefined)      // yedi a ko value undefined chaina vani vanna khojeko
{
    // throw new Error('This is not undefined');
    console.log('The value of a is defined');
}
else
{
    // console.log('This is undefined');
    throw new Error('The value of a is undefined');         // yedi tmlai error aaye pachi error display garauna cha & also error aayepachi talako kunai code pani execute garnu chaina vani siddai yesari error throw garna sakincha... NOTE : yaha batw throw gareko error lai catch block le catch kunai halat ma gardaina.. kinaki yo line ma error aaye pachi yo file ko aru kunai line execute huna paudaina.. yei terminate huncha program
}



// Example 2 : More advance way of handling error in javascript, using try catch block
try             // try block ko kaam vaneko kei task garney ho, and error aayo vani jun line ma error aaucha tyo vanda talako code execute navai siddai catch block ma jancha
{
    console.log("We are inside try block");
    // do something

    // dhiraj();               // yo dhiraj() vanni function definition maile katai pani lekheko chaina so yo line le error generate garcha
    
} 
catch(error)            // catch block only catches error of try block.... catch ko kaam vaneko try block ma error aako cha vani yo catch block le error catch garne kaam garcha,, try block ko error matra catch le handle garcha anta ko error catch block le catch gardaina... 
{
    console.log(error)
    console.log(error.name);
    console.log(error.message);

    // do something
    
} 
finally        // jun language ma pani finally ko meaning tei ho     // error aawos ya error na aawos we will run finally block
{
    // do something
    console.log("Executing Finally Block. It will run whaterver happens.")
}