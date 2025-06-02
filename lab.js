//Task 1, Part A: User enters number via prompt call
let userNumber = parseFloat(prompt("Please enter a number:"));

let quantityStr = document.querySelector(".quantity");
quantityStr.innerHTML = `Quantity: ${userNumber}`;

//Task 1, Part B: User is prompted for percentage. Result is ifOutputted using formatted string
let userPercentage = prompt("Please enter a percentage:");

let finalPercentage = parseFloat(userPercentage) * 0.01;
let finalResult = finalPercentage * userNumber;

let percentageStr = document.querySelector(".percentage");
percentageStr.innerHTML = `${userPercentage}% of Quantity, ${userNumber}, is ${finalResult}`;

//Task 2, Part A: If with branches
let userGrade = parseFloat(prompt("Enter a grade between 1 and 100"));

let ifOutputGrade = document.querySelector(".ifGrade");
    if(userGrade < 1){
        alert("Invalid Number");
        ifOutputGrade.innerHTML = "a) Invalid";
    }
    else if(userGrade <= 60){;
        ifOutputGrade.innerHTML = "a) F";
    }
    else if(userGrade <= 70){;
        ifOutputGrade.innerHTML = "a) D";
    }
    else if(userGrade <= 80){;
        ifOutputGrade.innerHTML = "a) C";
    }
    else if(userGrade <= 90){;
        ifOutputGrade.innerHTML = "a) B";
    }
    else if(userGrade <= 100){;
        ifOutputGrade.innerHTML = "a) A";
    }
    else{
        alert("Invalid number.");
        ifOutputGrade.innerHTML = "a) Invalid";
    }

//Task 2, Part B: Switch Statements
let switchOutputGrade = document.querySelector(".switchGrade");

switch(true) {
    case (userGrade < 1):
        alert("Invalid");
        switchOutputGrade.innerHTML = "b) Invalid";
        break;
    case(userGrade <= 60):
        switchOutputGrade.innerHTML = "b) F";
        break;
    case(userGrade <= 70):
        switchOutputGrade.innerHTML = "b) D";
        break;
    case(userGrade <= 80):
        switchOutputGrade.innerHTML = "b) C";
        break;
    case(userGrade <= 90):
        switchOutputGrade.innerHTML = "b) B";
        break;
    case(userGrade <= 100):
        switchOutputGrade.innerHTML = "b) A";
        break;
    default:
        alert("InvalidNumber");
        switchOutputGrade.innerHTML = "b) Invalid";
        break;
}

//Task 3: Variables and loops
let professorName = prompt("Which professor are these lines for?");
let lineWritten = prompt("What is the line?");
let lineNumber = parseInt(prompt("How many lines?"));

for (let num = 1; num <= lineNumber; num++) {
    console.log(num + " " + lineWritten);
}

//Task 4: Variables, Loops, DOM
let str = " ";
let n = 1;

let professorTitle = document.querySelector(".professor");
professorTitle.innerHTML = `${professorName}`;
let lineList = document.querySelector(".lines");

while (n <= lineNumber){
    str += `${n} ${lineWritten} <br>`;
    n++;
}
lineList.innerHTML = str;

//Task 5: Variables, Loops, DOM, Function
let functionProfessor = document.querySelector(".arrowProfessor");
functionProfessor.innerHTML = `${professorName}`;

let functionLines = document.querySelector(".arrowLines");


const lineDetails = (lineNumber, lineWritten) => {
    while (n<=lineNumber){
        str += `${n} ${lineWritten} <br>`;
        n++;
    };
    return str;
}
let arrowStr = lineDetails(lineNumber, lineWritten);
functionLines.innerHTML = arrowStr;


//Task 6, First Strategy: Nested Loop
let title1 = document.querySelector(".firstTitle");
title1.innerHTML = "First Table";

let firstTable = document.querySelector(".firstStrategy");

let firstDisplayStr = " "
for(let factor1 = 1; factor1 <= 1; factor1++){
    for(let factor2 = 1; factor2 <=12; factor2++){
    let firstProduct = factor1 * factor2;
    firstDisplayStr += `${factor1} X ${factor2} = ${firstProduct}<br>`;
    }
}
firstTable.innerHTML = firstDisplayStr;

//Task 6, Second Strategy: Function Within a Loop
let title2 = document.querySelector(".secondTitle");
title2.innerHTML = "Second Table";

let secondTable = document.querySelector(".secondStrategy");
let secondDisplayStr = " ";
let num = 1

function twoTable(factor3) {
    return factor3 * num
}
for (let factor3 = 1; factor3 <=12; factor3++){
    let secondProduct = twoTable(factor3);
    secondDisplayStr += `${num} X ${factor3} = ${secondProduct}<br>`;
}
secondTable.innerHTML = secondDisplayStr;

//Task 6, Third Strategy: Function calls a Function
let title3 = document.querySelector(".thirdTitle");
title3.innerHTML = "Third Table";
let thirdTable = document.querySelector(".thirdStrategy")

function allTimesTables(delimiter) {
    function timesTable(number, delimiter) {
        let tableStr = "<br>"
        for (let factor = 1; factor <= 12; factor++) {
             tableStr += `${number} x ${factor} = ${number * factor} ${delimiter}`;
        }
        return tableStr;
    }

    let thirdDisplayStr = "";
    for (let tableNum = 1; tableNum <= 12; tableNum++) {
        thirdDisplayStr += timesTable(tableNum, delimiter);
    }
    thirdTable.innerHTML = thirdDisplayStr;
}
allTimesTables('<br>');

/* Task 7, Part 1: Hoisting

a) Hoisting in a function context is using a function before it's declared.
b) Hoisting is a feature of var declarations and also allows a variable to be
    called or referenced before it's declared.
*/

// Task 7, Part 2a): Function Hoisting Example

greetingStr();

function greetingStr() {
    return console.log("Hello!");
}


// Task 7, Part 2b) Variable Hoisting Example

greetStr();

function greetStr(name) {
    return (console.log(`Hello ${name}!`));
}

var name = "Alice Smith";

/* 
EMCA standards have resolved the issue of hoisting by using let and const 
instead of var. Function declarations are the only functions that are hoisted,
and can be made and expression, IIFE, arrow function, or callback function to be 
avoided.
*/
