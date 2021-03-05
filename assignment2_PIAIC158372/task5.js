

var a = 7 ;
alert("let start the guess game..");
var b = prompt("Guess the secret number ( ranging from 1 to 10 ) ??");
Number(b);
var c = a+1;

if (a == b){
    document.write("Bingo! Correct Answer") ; 
}else if (c == b) {
    document.write("Close enough to correct answer");
}else{
    document.write("You are wrong!");
}