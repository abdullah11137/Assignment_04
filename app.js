// Chapters 9 - 11



// Q1


// var city = prompt("Enter your city");
// if (city=="Karachi"){
//     alert("Welcome to city of lights")
// }


// Q2


// var gender = prompt("Enter your gender");
// if(gender=="male"){
//     alert("Good Morning Sir.")
// }else if(gender=="female"){
//     alert("Good Morning Ma'am.")
// }


// Q3


// var inputColor = prompt("Enter a color of traffic signal.");
// if(inputColor=="red"){
//     alert("Must Stop")
// } else if(inputColor=="yellow"){
//     alert("Ready to move")
// } else if (inputColor=="green"){
//     alert("Move now");
// }


// Q4


// var remainingFuel = prompt("Input remaining fuel in your car");
// if(remainingFuel<0.25){
//     alert("Please refill the fuel in your car.")
// }


// Q5(a)


// var a = 4;
// if(++a===5){
//     alert("given condition for variable a is true");
// }

// It's true


// Q5(b)


// var b = 82;
// if(b++===83){
//     alert("given condition for variable b is true");
// }

// It's false


// Q5(c)


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// Conditions 2 & 4 are true 


// Q5(d)


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// The cost equals


// Q5(e)


// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//     True


// Q5(f)


// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// It's true


// Q6


// var maths = +prompt("Enter math's subject marks");
// var english = +prompt("Enter english subject marks");
// var urdu = +prompt("Enter urdu subject marks");
// var obtainedMarks = maths + english + urdu;
// var totalMarks = 300;
// var percentage = obtainedMarks/totalMarks*100;
// var grade;
// if (percentage>=80){
//     grade = "A-one<br> Remarks: Excellent"
// }else if (percentage>=70){
//     grade = "A<br> Remarks: Good"
// }else if (percentage>=60){
//     grade = "B<br> Remarks: You need to improve"
// } else if(percentage<60){
//     grade = "Fail<br> Remarks: Sorry"
// }   

// document.write("<h1>Mark Sheet</h1>")
// document.write(`<br><br><br><br>Total marks: ${totalMarks}<br>Marks obtained: ${obtainedMarks}<br>Percentage: ${percentage}<br>Grade: ${grade}`);



// Q7


// var secretNumber = 7;
// var guessedNumber = +prompt("Guess the secret number (ranging from 1 to 10)");
// if (secretNumber = guessedNumber){
//     alert("Bingo! Correct answer");
// }
// $guessedNumber = guessedNumber + 1;
// if(secretNumber = $guessedNumber){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Enter number between 1 to 10");
// }


// Q8


// var num = prompt("Enter any number");
// if(num%3==0){
//     alert(`${num} is divisible by 3`);
// } else {
//     alert(`${num} is not divisible by 3`);
// }


// Q9


// var num = prompt("Enter any number");
// if(num%2==0){
//     alert(`${num} is even number.`);
// }else{
//     alert(`${num} is odd number.`);
// }


// Q10



// var temp = prompt("Enter temperature");
// if(temp>40){
//     alert("It is too hot outside.");
// }else if(temp>30){
//     alert("The Weather today is Normal.");
// }else if(temp>20){
//     alert("Today's Weather is cool.");
// }else if(temp>10){
//     alert("OMG! Today's weather is so Cool.");
// }


// Q11


// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var operation = +prompt("Enter operation of addition, subtraction, multiplication, division or modulus (+, -, *, /, %)")
// var addition = firstNumber + secondNumber;
// var subtraction = firstNumber - secondNumber;
// var multiplication = firstNumber * secondNumber;
// var division = firstNumber / secondNumber;
// var modulus = firstNumber % secondNumber;
// if(operation == addition){
//     alert(`${firstNumber} + ${secondNumber} is ${addition}`);
// } else if(operation == subtraction){
//     alert(`${firstNumber} - ${secondNumber} is ${subtraction}`);
// } else if(operation == multiplication){
//     alert(`${firstNumber} x ${secondNumber} is ${multiplication}`);
// } else if(operation == division){
//     alert(`${firstNumber} / ${secondNumber} is ${division}`);
// }else if(operation == modulus){
//     alert(`${firstNumber} % ${secondNumber} is ${modulus}`);
// }