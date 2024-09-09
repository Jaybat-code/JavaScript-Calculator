//first we need to grab all of the button ID's and store them into readable variables.
const clear = document.getElementById("ac");
const negative = document.getElementById("+/-");
const percent = document.getElementById("%");
const division = document.getElementById("÷")
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const multiplication = document.getElementById("X");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const minus = document.getElementById("-");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("+");
const zero = document.getElementById("0");
const exponent = document.getElementById("^");
const decimal = document.getElementById(".");
const equal = document.getElementById("=");

//array of all buttons for handy loops
const allButtons = [clear,negative,percent,division,seven,eight,nine,multiplication,four,five,six,minus,one,two,three,plus,zero,exponent,decimal,equal]
const numberButtons =[zero,one,two,three,four,five,six,seven,eight,nine];
const numberValues=[0,1,2,3,4,5,6,7,8,9]
const oppButtons = [division,multiplication,minus,plus,exponent];
const oppText=["/","X","-","+","^"]
const appendOpps = [negative,percent,decimal]
const appendText = ["-",'%',"."]

//We need access to the text on the screen and we need 5 varibles to kinda trade hands.
const screen = document.getElementById("screen");
let currentValue = screen.value;
let firstValue = '';
let secondValue = '';
let opperation = '';
//Sound Effects.
var boop = document.getElementById("click-sound");
var ding = document.getElementById("equals-sound");
//Darkmode Icon.
var icon = document.getElementById("icon");

//listens for any operators the require appending a string("To later be parsed") to a number value.
function listenForAppendOpperators(){
    for(let i =0;i<appendOpps.length;i++){
        appendOpps[i].addEventListener("click",()=>{
            if(i==0){
                currentValue="-"+currentValue;
            }else if(i==1){
                currentValue+="%";
            }else if(i==2){
                currentValue+=".";
            }
            screen.value = currentValue;
        })
    }
}
//listen for any operator button, loop through them and do some fancy shit! (IDK yet.)
function listenForOpperation(){
    for(let i = 0;i<oppButtons.length;i++){
        oppButtons[i].addEventListener("click",()=>{
        if(currentValue!==''){
        firstValue=currentValue;
        opperation=oppText[i];
        screen.value=''
        currentValue=''
        }
    });
    }
}
//listening for the clear screen opperation to which we set all values to an empty string
function listenForClearScreen(){
    clear.addEventListener("click",()=>{
        screen.value='';
        currentValue='';
        secondValue='';
        thirdValue='';
        fourthValue='';
    })
}


//loops through all numberbuttons, assignes an associated value, and allows you to add the numbervalue to the screen
function listenForNumClick(){
    for(let i = 0;i<numberButtons.length;i++){
        numberButtons[i].addEventListener("click",()=>{
        screen.value+=numberValues[i];
        currentValue=screen.value;
        })
    }
}

//listen for the equals opperation, this is where we do some math wizardry by utilizing the firstvalue and secondvalue handed over from the currentvalue.
function listenForEquals(){
    equal.addEventListener("click",()=>{
        if(firstValue!==''&&currentValue!==''){
            secondValue=currentValue;
            switch(opperation){
                case "+":
                    screen.value=parseInt(firstValue)+parseInt(secondValue);
                    break;
                case "-":
                    screen.value=parseInt(firstValue)-parseInt(secondValue);
                    break;
                case 'X':
                        screen.value = parseFloat(firstValue) * parseFloat(secondValue);
                        break;
                case '/':
                        screen.value = parseFloat(firstValue) / parseFloat(secondValue);
                        break;
                case '^':
                        screen.value = Math.pow(parseFloat(firstValue), parseFloat(secondValue));
                        break;
            }
            firstValue = screen.value;
            currentValue = '';
            secondValue = '';
            opperation = '';
        }
    });
}
//listens to each and every button and gives it a sound, secludes the equal button into its own sound.
function addsoundToButtons(){
    for(let i = 0;i<allButtons.length;i++){
        allButtons[i].addEventListener("click",()=>{
        if(i===19){
        ding.playbackRate=1.5;
        ding.currentTime =0;
        ding.play();          
        }else{
        boop.playbackRate=1.5;
        boop.currentTime=.3;
        boop.play();
        } 
        })
        
    }
}
//listens for the button press of the skull emoji on the header, when clicked it will flip between light and dark mode.
function darkmode(){
    let counter = 0;
    icon.addEventListener("click",()=>{
    counter++;
    if(counter % 2 == 1){ // counter is odd, turn to dark grey gradient
        document.body.style.background = "linear-gradient(135deg, black, white)";
        document.body.style.backgroundSize="100vw 100vh"
    } else { // counter is even, turn back to color
        document.body.style.background = "";
        document.body.style.backgroundColor = "rgb(169, 197, 216)";
    }
    })
}

//function call for the program.
listenForNumClick();
listenForClearScreen();
listenForOpperation();
listenForEquals();
addsoundToButtons();
darkmode();
listenForAppendOpperators();