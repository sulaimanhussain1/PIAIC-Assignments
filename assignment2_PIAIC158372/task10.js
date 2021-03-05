


var correctPassword = "Pakistan123";
var password = prompt("Enter your password : " );

if(password === correctPassword){
    if(true){
        alert("re-enter your password");
        var retype = prompt("Re-enter your password ");
    }else if (correctPassword === retype){
        alert('“Correct! The password you entered matches the original password”.');
    }else{
        alert("Incorrect Password!");
    }
}else {
    alert("Please enter correct password ");
    var pass = prompt("Please enter your password");
}


