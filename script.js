function add(a,b){
    return +a + +b;
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
        updateScreen(result);
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


let calculatorState ={
    display: "0",
    firstOperand: null,
    secondOperand: null,
    operator: null,
    timeForSecond: false,

}

const digitButtons = document.querySelectorAll(".digitButton");
digitButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        //console.log(button.textContent);
        if (calculatorState.timeForSecond == false){
            pushNum1(button.textContent);
        }
        else{
            pushNum2(button.textContent);
        }

    })
});

const clearAllButton = document.querySelector("#clearAllButton");
clearAllButton.addEventListener("click",()=>{
    num1 = [];
    num2 = [];
    calculatorState.display = "0";
    updateScreen(calculatorState.display);
});

const plusButton = document.querySelector("#addButton");
plusButton.addEventListener("click",()=>{
    calculatorState.firstOperand = num1;
    calculatorState.timeForSecond = true;
    calculatorState.operator = "+";
});

const equalButton = document.querySelector("#equalButton");
equalButton.addEventListener("click",()=>{
    operate(calculatorState.operator,num1.join(""),num2.join(""));
});


function updateScreen(value){
    const screenLive = document.querySelector(".liveText");
    screenLive.textContent = value;
}

function pushNum1(num){
    num1.push(num);
    updateScreenLive(num1.join(""));
    console.log(num1);
}

function pushNum2(num){
    num2.push(num);
    updateScreenLive(num2.join(""));
    console.log(num2);
}


function updateScreenLive(liveResult){
    const screenLive = document.querySelector(".liveText");
    screenLive.textContent = liveResult;
}

//console.log(num1);