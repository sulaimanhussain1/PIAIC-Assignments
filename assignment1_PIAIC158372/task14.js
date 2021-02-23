

var a = 2;   // 1 
var b = 1;   // 0  // 1  // 0

var result = --a - --b + ++b + b--;

document.write("a is:" + a + "<br>");
document.write("b is : " + b + "<br>");
document.write( "result is : " + result ); 

// var result =  1  -  0  +  1  + 1 ;

// --a = 1
// --a - --b = 1 
// --a - --b + ++b = 2 
// --a - --b + ++b + b-- = 3