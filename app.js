//btn variables
const clear = document.getElementById("ac");
const plumin = document.getElementById("+/-")
const perc = document.getElementById("%")
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const div = document.getElementById("÷");
const mul = document.getElementById("X");
const sub = document.getElementById("-");
const add = document.getElementById("+");
const equ = document.getElementById("=");
const zero = document.getElementById("0");
const exp = document.getElementById("^");
const dec = document.getElementById(".");
//array of all buttons
const buttons =[clear,plumin,perc,div,seven,eight,nine,mul,four,five,six,sub,one,two,three,add,zero,exp,dec,equ]
const typebuttons = [one,two,three,four,five,six,seven,eight,nine,zero]
const typetext = [1,2,3,4,5,6,7,8,9,0]

//msc variables
const icon = document.getElementById("icon")
const buttonsclass = document.querySelectorAll(".input-button")
const notif = document.getElementById("click-sound");
const screen = document.getElementById("screen");
let clicks=0;

//loop through all buttons and give it a value
for(let i =0;i<typebuttons.length;i++){
    typebuttons[i].addEventListener("click",function(){
    screen.value+=typetext[i]
    });
}
    





//play sound for each button press
notif.playbackRate=1.5
buttonsclass.forEach(button => {
button.addEventListener("click",function(){
    notif.currentTime = .30;
    notif.play();
    });
});
    
//Darkmode and Lightmode Function
icon.addEventListener("click" ,function(){
    clicks++;
//-------------------------------------------------------
    if (clicks % 2 == 0) {
        // Remove the backgroundColor if it's set
        document.body.style.removeProperty('background-color');
        // Set the gradient background (no need for vendor prefixes)
        document.body.style.backgroundColor = "rgb(169, 197, 216)";
        
    } else {
        // Remove the background gradient
        document.body.style.removeProperty('background');
        // Set the background color to black
        document.body.style.backgroundColor = "rgb(50,50,50)";
    }
});