const icon = document.getElementById("icon")
let clicks=0;
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