

// taking input 

document.write("<h1>SIMPLE CALCULATOR.</h1>");

var firstNum =Number(prompt("Enter first number ? "));
var operation = prompt("Operations : + , - , / , * , % ");
var secondNum =Number(prompt("Enter second number ? "));

// operators

var a1 = "+";
var a2 = "-";
var a3 = "*";
var a4 = "/";
var a5 = "%";

// if statement

if (operation === a1){
     sum = firstNum + secondNum;
     document.write("Addition");
    document.write("<br>");
    document.write( firstNum +  " +  " +  secondNum + " = " + sum);
}
else if(operation === a2 ){
    sub = firstNum - secondNum;
    document.write("Substraction");
   document.write("<br>");
   document.write( firstNum +  " -  " +  secondNum + " = " + sub);
}
else if (operation === a3){
    mul = firstNum * secondNum;
    document.write("Multiplication");
   document.write("<br>");
   document.write( firstNum +  " *  " +  secondNum + " = " + mul);
}
else if(operation === a4){
    div = firstNum / secondNum;
    document.write("Division");
   document.write("<br>");
   document.write( firstNum +  " /  " +  secondNum + " = " + div);
}
else if (operation === a5){
    mod = firstNum % secondNum;
    document.write("Modulus");
   document.write("<br>");
   document.write( firstNum +  " %  " +  secondNum + " = " + mod);
}
else{
    document.write("You entered wrong operator.");
}