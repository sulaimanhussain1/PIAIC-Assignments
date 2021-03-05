

var a = 4 ;
if ( ++a === 5){
    alert("given condition for variable a is true");
}  // display 

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true ");
} // not display 

var c = 12 ;
if (c++ === 13){
    alert("condition 1 is true");   // not display 
}
if(c === 13){
    alert("condition 2 is true");   // display
}    // true 
if(++c < 14 ){
    alert(" condition 3 is true");   // not display
}
if(c === 14){
    alert("condition 4 is true");   // display
}  // true 

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === laborCost + materialCost){
    alert("The Cost equals");
}   // display

if (true) {
    alert("True");  // display
}
if (false){
    alert("False");  // not display
}

if("car" < "cat"){
    alert("car is smaller than cat.");  // display

}