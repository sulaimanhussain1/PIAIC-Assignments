

var light = prompt ("Enter traffic signal colour ?" , "Red,Yellow,Green");

if ( light == "Red" ){
    alert("Must Stop.");
}else if (light === "Yellow" ){
    alert("Ready to move.");
}else if (light === "Green" ){
    alert("Move now.");
}else {
    alert("You entered wrong colour.");
}