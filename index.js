// CSS 처럼 접근가능 #id .class
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);

    if (hasClass) {
        title.classList.remove(CLICKED_CLASS)
    }else{
        title.classList.add(CLICKED_CLASS);
    }
    */
}

function init(){
    title.addEventListener("click", handleClick);
}

init()
/*
function handleReszie(event){
    console.log(event)
}

window.addEventListener("resize", handleReszie);
*/

/*
console.log('Im working. Im JS. Im Beautiful. Im worth it')

const a = 211;
let b = a- 5;
//a = 4 
console.log(b, a);

// Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
console.log(daysOfWeek)

// Object
const nakushaInfo = {
    name:"Nakusha",
    age:35,
    gender:"Male",
    isHandsome:true
}
console.log(nakushaInfo.name)

function sayHello(name, age){
    console.log("Hello!", name, "you have", age, "years of age");
    return `Hello ${name} you are ${age} years old`;
}

const calculator = {
    plus: function(a, b){
        return a + b
    }
}

console.log(calculator.plus(10, 50))
*/