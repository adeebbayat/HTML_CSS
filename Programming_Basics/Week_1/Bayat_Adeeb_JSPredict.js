// Predict 1: "I was born in 1980"

function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc();

// Predict 2: "I was born in 1980"

function myBirthYearFunc(birthYearInput){
    console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980);

/* Predict 3: 

"Summing Number!"
"num1 is 10"
"num2 is 20"
30

*/

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);
