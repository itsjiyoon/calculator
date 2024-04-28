const display = document.getElementById("display");

let firstOperand = "";
let secondOperand = "";
let counter = 1;
let firstOperator;
let secondOperator;
let operatorCounter = 1;
let percentageCounter = 1;
let result;

function getFirstOperand(num) {
    if (firstOperand == result) {
        secondOperand = "";
        secondOperand +=num;
        display.value = secondOperand;
    }

    else {
        firstOperand += num;
        display.value = firstOperand;

        if (firstOperand.length > 10) {
            display.value = "Too long";
            firstOperand = "";
        }
    }
}

function getSecondOperand(num) {
    secondOperand += num;
    display.value = secondOperand;

    if (secondOperand.length > 10) {
        display.value = "Too long";
        secondOperand = "";
    }
}

function firstOrSecond(number) {
    if (counter % 2 != 0) {
        getFirstOperand(number);
    }

    else { 
        getSecondOperand(number);
    }
}

function clearDisplay() {
    display.value = "";
    counter = 1;
    firstOperand = "";
    secondOperand = "";
    operatorCounter = 1;
    percentageCounter = 1; 
}

function backspace() {
    if (counter % 2 != 0) {
        let currentNumber = firstOperand.split("");
        
        currentNumber.length = currentNumber.length - 1;
        firstOperand = currentNumber.join("");
        display.value = firstOperand;
    }

    else {
        let currentNumber = secondOperand.split("");

        currentNumber.length = currentNumber.length - 1;
        secondOperand = currentNumber.join("");
        display.value = secondOperand;
    }
}

function getOperator(op) {
    if (op == "%") {
        calculate(firstOperator);
        firstOperand = firstOperand / 100;
        display.value = firstOperand;
        percentageCounter++;

        if (percentageCounter > 5) {
            display.value = "Lazy";
        }
    } 

    if (op == "=") {
        calculate(firstOperator);
    }

    if (operatorCounter % 2 != 0) {
        firstOperator = op;
        if (operatorCounter != 1) {
            calculate(firstOperator);
        }
        operatorCounter++;
        counter++
    }

    else if (operatorCounter % 2 == 0) { 
        secondOperator = op;
        operatorCounter++;
        counter++
        calculate(secondOperator);
    }

}


function calculate(op) {
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);

    if (operatorCounter == 1) {
        secondOperand = "";
        return;
    }

    switch(op) {
        case "/" :
            result = firstOperand / secondOperand;
            display.value = result;
            break;

        case "X" :
            result = firstOperand * secondOperand;
            display.value = result;
            break;

        case "-" :
            result = firstOperand - secondOperand;
            display.value = result;
            break;

        case "+" :
            result = firstOperand + secondOperand;
            display.value = result;
            break;
    }

    // console.log(firstOperand);
    // console.log(secondOperand);
    // console.log(firstOperator);
    // console.log(secondOperator);
            
    firstOperand = result;
    firstOperator = secondOperator;
    secondOperand = "";
    
    console.log(firstOperand);
    console.log(secondOperand);
    console.log(firstOperator);
    console.log(secondOperator);
    

}


