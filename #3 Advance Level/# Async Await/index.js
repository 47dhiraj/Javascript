console.log("This is tutorial 43");     // 1st ma ma yo exectue huncha

// yo async_await chai simple promise ko concept vanda halka thorai matra complex ho.. khasai testo kei chaina

// async_await ma fetch API call kasari garna sakincha vanera pani sikaiyeko cha

async function harry()                  // yo line ko async le k garcha vanda, yo harry() vanni function le return garne kura chai promise ko rup na banaucha (i.e async function enable us to write promise based code)
{
    console.log('Inside harry function');           // 4th ma yo line execute huncha

    // await le pani auta promise return garcha
    const response = await fetch('https://api.github.com/users');       // 5 th ma yo await ko line execute huna khojcha but execute hudaina, await le k vancha vanda, mero kaam na time lagcha so ma last ma execute hunchu.. function batw return vaye jasto gar (i.e function bahira gayera js file ko sabbai statement execution sakera matra feri async function ma aayera malai(i.e await lai) execute gar vancha)
    // await le aafno promise return garcha & response vanni kukani auta variable banayera store gareko
    
    console.log('before response');         //9 th ma yo line execute huncha

    const users = await response.json();  // 10 th ma yo line execute huncha, , since aba js file ko kunai remaing statement execute garna chaina... so yesailai nai wait garera bascha & complete execute garcha  // aayeko response lai pani json format ma laijancha

    console.log('users resolved')       // 11th ma yo line execute huncha

    return users;                       // 12 th ma yaha batw users return huncha & finally yo async function ko kaam sakera yo async function batw nai return vayera .then() vanni method ma jancha

    // return "harry";
}


console.log("Before calling harry")         // 2nd ma yo exectue huncha

let a = harry();                            // 3rd ma yo harry vanni function call huncha

console.log("After calling harry")          // 6th ma yo execute huncha

console.log(a);                             // 7 th ma yo execute huncha but yo line ma a (i.e promise from async function harry()) aai sakeko hudaina, so a ko value pending huncha,, so excute completely hudaina

a.then(data => console.log(data))           //SABBAI VANDA LAST MA EXECUTE HUNCHA : since yo tw async function harry() le promise resolve garepachi matra execute hune code (i.e savai vanda last ma execute hune line ho)

console.log("Last line of this js file")    // 8th ma yo line execute huncha  .. since js file ko sabai statement sakiyo execute garera ,, so aba remaining async function ko aginai dekhi wait gari rako await ma jancha