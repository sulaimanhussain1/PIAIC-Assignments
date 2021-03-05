



alert("Check even or odd number.");
var input = prompt("Please enter a number ? ");

if ( input % 2 == 0){
    document.write("You entered an even number.");
    document.write("<br>");
    document.write(input + " " +  "is an even number,");
} else{
    document.write("You entered an odd number.");
    document.write("<br>");
    document.write(input + " " +  "is an odd number,");
}