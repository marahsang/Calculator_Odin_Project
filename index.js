const buttons = document.querySelectorAll('button')  
const display = document.querySelector('.number-on-screen') 
 
let storedNumber = '' 
let clickedOperator = '' 

let newInput = false
let didEquals = false 

function displayResult(operator) { 
  if (!storedNumber) { 
    storedNumber = display.textContent  
  } else { 
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
    } else if (operator == '-') {
      return subtract(a, b)
    } else if (operator == 'x') {
      return multiply(a, b) 
    } else if (operator == '÷') {
        return divide(a, b)
    } else if (operator == '%') {
        return modulo(a, b)
    } else {
      return null; 
    }   
  } 
    console.log(operate(15, '/', 3));
    
    function clear() {
      display.textContent = 0 
      numberStored = '' 
      operatorStored = ''        
  }

    function setDisplay(displayNum) { 
      displayNum = displayNum.toString()
  
      if (displayNum.length > 9) { 
        displayNum = parseFloat(displayNum) 
        displayNum = displayNum.toExponential(2) 
      } 
      
      display.textContent = displayNum;  
  } 
  
    function addToDisplay(number) {
      let displayNum = display.textContent  
      
      if(newInput) {  
        newInput = false 
        setDisplay(number) 
      } else if (displayNum == 0) {   
        setDisplay(number) 
      } else {
        if (displayNum.includes('e')) {  
          displayNum = Number(displayNum);  
        }  
        displayNum = displayNum + number
        setDisplay(displayNum)
      } 
  } 

    buttons.forEach(button =>{ 
      button.addEventListener('click', function(){ 
      let input = this.textContent 
           if (/[0-9\.]/.test(input)) { 
                                         
              if (didEquals) { 
                  setDisplay(input) 
                  didEquals = false 
              } else { 
              addToDisplay(input) 
              }
          } else if (input == 'AC') { 
              clear() 
          } else if (input == '=') { 
                          if (!storedNumber || !clickedOperator) {  
                  alert('Error: no operation entered. Clearing data')  
                  clear() 
          } else { 
                  storedNumber = operate(Number(storedNumber), clickedOperator, Number(display.textContent))
                  clickedOperator = ''  
                  setDisplay(storedNumber) 
                  storedNumber = ''
                  didEquals = true  
          }
          } else { 
              displayResult(input) 
          } 
      }) 
  }); 
  operate();
