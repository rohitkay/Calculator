function add(a,b){
    return +a + +b;
}

function subtract(a,b){
    return +a - +b;
}

function multiply(a,b){
    return Math.round((+a * +b)*1e12)/1e12;
}

function divide(a,b){
    return Math.round((+a / +b)*1e12)/1e12;
}

let display = "0";
let num1 = [];
let num2 = []; 
let operator = null;
let timeForSecond = false;
let lightningMode = false;

function operate(operatorValue,number1,number2){
    if (operatorValue == "+"){
        let result = add(number1,number2);
        updateHistory(`${number1}${operatorValue}${number2}`);
        updateScreen(result);
        return result.toString().split(""); 
    }
    if (operatorValue == "-"){
        let result = subtract(number1,number2);
        updateHistory(`${number1}${operatorValue}${number2}`);
        updateScreen(result);
        return result.toString().split(""); 
    }
    if (operatorValue == "×"){
        let result = multiply(number1,number2);
        updateHistory(`${number1}${operatorValue}${number2}`);
        updateScreen(result);
        return result.toString().split("");
    }
    if (operatorValue == "÷"){
        let result = divide(number1,number2);
        updateHistory(`${number1}${operatorValue}${number2}`);
        updateScreen(result);
        return result.toString().split("");
    }
}

const digitButtons = document.querySelectorAll(".digitButton");
digitButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        //console.log(button.textContent);
        if (timeForSecond == false){
            pushNum1(button.textContent);
        }
        else{
            pushNum2(button.textContent);
        }

    })
});

const deleteButton = document.querySelector("#deleteButton");
deleteButton.addEventListener("click",()=>{
  if(timeForSecond == true){
    num2.splice(num2.length-1,1);
    display = num2.join("");
    if (num2.length == 0){
      display = 0;
    }
    updateScreen(display);
  }
  else{
    num1.splice(num1.length-1,1);
    display = num1.join("");
    if (num1.length == 0){
      display = 0;
    }
    updateScreen(display);
  }
  
});


const switchButton = document.querySelector("#switchButton");
switchButton.addEventListener("click",()=>{
  if(timeForSecond == true){
    if (num2[0] == "-"){
      num2=num2.slice(1);
      console.log("reached cp1")
 
    }
    
    else{
      num2.unshift("-");
    }
    display = num2.join("");
    updateScreen(display);
    
  }
  else{
    if (num1[0] == "-"){
      num1=num1.slice(1);
      console.log("reached cp2, num2 is: " + num2);
    }
    
    else{
      num1.unshift("-");
    }
    display = num1.join("");
    updateScreen(display);
  }
});


//Clear All Button Logic///

const clearAllButton = document.querySelector("#clearAllButton");
clearAllButton.addEventListener("click",()=>{
  display = "0";
  num1 = [];
  num2 = [];
  operator = null;
  timeForSecond = false;
  updateScreen(display);
  updateHistory("0");
  console.log(num1);
  console.log(num2);
});




const plusButton = document.querySelector("#addButton");
plusButton.addEventListener("click",()=>{
    if(num2.length > 0){
      if (operator =="×"){
        num1 = operate("×",num1.join(""),num2.join(""));
      }
      if (operator =="+"){
        num1 = operate("+",num1.join(""),num2.join(""));
      }
      if (operator =="-"){
        num1 = operate("-",num1.join(""),num2.join(""));
      }
      
      if (operator =="÷"){
        num1 = operate("÷",num1.join(""),num2.join(""));
      }
      
      num2 = []
    }
  
    timeForSecond = true;
    operator = "+";
});



const minusButton = document.querySelector("#minusButton");
minusButton.addEventListener("click",()=>{
    if(num2.length > 0){
      if (operator =="×"){
        num1 = operate("×",num1.join(""),num2.join(""));
      }
      if (operator =="+"){
        num1 = operate("+",num1.join(""),num2.join(""));
      }
      if (operator =="-"){
        num1 = operate("-",num1.join(""),num2.join(""));
      }
      
      if (operator =="÷"){
        num1 = operate("÷",num1.join(""),num2.join(""));
      }
      
      num2 = []
    }
  
    timeForSecond = true;
    operator = "-";
});



const multiplyButton = document.querySelector("#multiplyButton");
multiplyButton.addEventListener("click",()=>{
    if(num2.length > 0){
      if (operator =="×"){
        num1 = operate("×",num1.join(""),num2.join(""));
      }
      if (operator =="+"){
        num1 = operate("+",num1.join(""),num2.join(""));
      }
      if (operator =="-"){
        num1 = operate("-",num1.join(""),num2.join(""));
      }
      
      if (operator =="÷"){
        num1 = operate("÷",num1.join(""),num2.join(""));
      }
      
      num2 = []
    }
  
    timeForSecond = true;
    operator = "×";
});


const divideButton = document.querySelector("#divideButton");
divideButton.addEventListener("click",()=>{
    if(num2.length > 0){
      if (operator =="×"){
        num1 = operate("×",num1.join(""),num2.join(""));
      }
      if (operator =="+"){
        num1 = operate("+",num1.join(""),num2.join(""));
      }
      if (operator =="-"){
        num1 = operate("-",num1.join(""),num2.join(""));
      }
      
      if (operator =="÷"){
        num1 = operate("÷",num1.join(""),num2.join(""));
      }
      
      num2 = []
    }
  
    timeForSecond = true;
    operator = "÷";
});



const decimalButton = document.querySelector("#decimalButton");
decimalButton.addEventListener("click",()=>{
  if(timeForSecond == true){
    if (num2.indexOf(".") == -1){
      if (num2.length ==0){
        num2.push("0");
      }
      num2.push(".");
      display = num2.join("");
      updateScreen(display);
    }
  }
  else{
    if (num1.indexOf(".") == -1){
      if (num1.length ==0){
        num1.push("0");
      }
      num1.push(".");
      display = num1.join("");
      updateScreen(display);
    }
  }                           
});









const equalButton = document.querySelector("#equalButton");
equalButton.addEventListener("click",()=>{
    num1 = operate(operator,num1.join(""),num2.join(""));
    num2 = []
    timeForSecond = "false"
    
});




function updateScreen(value){
    const screenLive = document.querySelector(".liveText");
    value = value.toString();
    if (value.length >= 12 ){
      //value = "Too Long";
      if (value.indexOf(".")!= -1){
        value = value.slice(0,11);
      }
      else{
        value = "Too Long";
      }
      
    }
    screenLive.textContent = value;
    
}

function updateHistory(value){
  const history = document.querySelector("#history");
  history.textContent = value;
}




function pushNum1(num){
    num1.push(num);
    updateScreen(num1.join(""));
    console.log("this is num1: " + num1);
}



function pushNum2(num){
    num2.push(num);
    updateScreen(num2.join(""));
    console.log("this is num2: " + num2);
}


const lightningButton = document.querySelector("#lightningButton");
const calculatorShell = document.querySelector(".calculatorShell");
const logo = document.querySelector(".logo");
const screen = document.querySelector(".screen");
const whiteButton = document.querySelectorAll(".whiteButton");
lightningButton.addEventListener("click",()=>{
  if(lightningMode == false){
    calculatorShell.style.backgroundColor = "white";
    logo.style.color = "black";
    screen.style.backgroundColor = "#434343";
    whiteButton.forEach((item)=>item.style.backgroundColor ="#aaaaaa");
    lightningMode = true;
  }
  else{
    calculatorShell.style.backgroundColor = "#2a2a2a";
    whiteButton.forEach((item)=>item.style.backgroundColor ="#ffffff");
    screen.style.backgroundColor = "#000000";
    logo.style.color = "white";
    lightningMode = false;
  }
});


//console.log(num1);