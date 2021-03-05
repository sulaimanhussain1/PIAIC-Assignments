

var a = prompt("Enter number ? ");

if (a > 0 ){
    document.write("You entered positive number ." + "<br>");
    document.write(a);
}else if ( a == 0 ){
    document.write("You entered zero.");
    document.write("<br>");
    document.write(a)
}else {
    document.write("You entered negative number. " );
    document.write("<br>");
    document.write(a);
}