function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

let num1 = [];
let num2 = [];
let operator = null;

function operate(operatorValue,number1,number2){
    if (operatorValue == "+"){
        let result = add(number1,number2);
    }
    if (operatorValue == "-"){
        let result = subtract(number1,number2);
    }
    if (operatorValue == "×"){
        let result = multiply(number1,number2);
    }
    if (operatorValue == "÷"){
        let result = divide(number1,number2);
    }
}

const digit1 = document.querySelector("#digit1");
digit1.addEventListener("click",pushNum1(1));

function pushNum1(num){
    num1.push(num);
    updateScreenLive(num1);
}

function updateScreenLive(liveResult){
    const screenLive = document.querySelector(".liveText");
    screenLive.textContent = liveResult;
}

console.log(num1);