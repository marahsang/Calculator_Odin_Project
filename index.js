
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

  console.log(modulo(5, 3))

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
    else if (operator == '÷') {
        return divide(a, b)
      } else if (operator == '%') {
        return modulo(a, b)
      }
    else {
      return null; 
    } 
  } 
  
    console.log(operate(15, '/', 3));