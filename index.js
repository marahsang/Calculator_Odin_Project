const buttons = document.querySelectorAll('button')  
const display = document.querySelector('.number-on-screen') 
 
let storedNumber = '' 
let clickedOperator = '' 

let newInput = false
let didEquals = false 

function displayResult(operator) { 
  if (!storedNumber) { 
    storedNumber = display.textContent  
  } 
  else { 
    storedNumber = operate(Number(storedNumber), clickedOperator, Number(display.textContent))
      } 
  clickedOperator = operator  
  newInput = true 
  didEquals = false 
} 


function add(a, b) {
    return a + b
  }
  
  function subtract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }
  
  function modulo(a, b) {
    return a % b
  }

  function operate(a, operator, b) {
    if (operator == '+') {
      return add(a, b)   
    }
    else if (operator == '-') {
      return subtract(a, b)
    }
    else if (operator == 'x') {
      return multiply(a, b) 
    }
    else if (operator == '/') {
        return divide(a, b)
      } else if (operator == '%') {
        return modulo(a, b)
      }
    else {
      return null; 
    } 
  } 
    console.log(operate(15, '/', 3));
    