

//    calculate student data and percentage
// short program.. 

document.write("<h1> Mark Sheet  </h1>");

var totalMarks = 300;
var chem = prompt("Enter chemistry marks out of 100 ?");
var maths = prompt("Enter maths marks out of 100 ?");
var phy = prompt("Enter physics marks out of 100 ?");
var obtainMarks = Number(chem) + Number(maths) + Number(phy) ;
var percentage = (obtainMarks * 100 / totalMarks);
document.write("Total Marks : " + totalMarks);
document.write("<br>");
document.write("Marks obtained : " + obtainMarks);
document.write("<br>");
document.write("Percentage :" + percentage + "%");
document.write("<br>");

if(percentage >= 80 ){
    document.write("Grade : A-one");
    document.write("<br>");
    document.write("Remarks : Excellent ");
}else if (percentage >= 70  ){
    document.write("Grade : A");
    document.write("<br>");
    document.write("Remarks : Good ");   
}else if (percentage >= 60 ) {
    document.write("Grade : B");
    document.write("<br>");
    document.write("Remarks : You need to improve ");
}else {
    document.write("Grade :  Failed ");
    document.write("<br>");
    document.write("Remarks : Sorry");
}

// var obtainMarks = prompt("Enter your total marks out of 300 ?" );