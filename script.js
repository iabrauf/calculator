let output = "";
let result = 0;
let operator = "";

const inputField = document.querySelector('input');

const buttons = document.querySelectorAll('.item');
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.value;
    if (value === '=' && output === "" && result === 0) {
      alert('Wrong input Not a number');
      clearScreen();
    }
    if (value === '=') {
      // console.log(operator);
      // console.log(result);
      // console.log(output);
      if (operator === '') {
        result = parseFloat(output);
      } else {
        const secondNumber = parseFloat(output);
        result = evaluateOperation(result, operator, secondNumber);
        operator = '';
      }
      output = result.toString();
      inputField.value = output;
    } else if (value === 'C') {
      clearScreen();
    } else if (isOperator(value)) {
      if (operator === '') {
        result = parseFloat(output);
        operator = value;
        inputField.value = output + operator;
        output = "";
      } else {
        const secondNumber = parseFloat(output);
        result = evaluateOperation(result, operator, secondNumber);
        operator = value;
        inputField.value = result + operator;
        output = "";
      }
    } else {
      output += value;
      // console.log(output);
      inputField.value += value;
    }
  });
});

function isOperator(value) {
  return value === '+' || value === '-' || value === '*' || value === '/';
}

function evaluateOperation(firstNumber, operator, secondNumber) {
  if (operator == '/' && secondNumber == 0) {
    alert("1 divided by 0 is infinity.");
    clearScreen();
  }
  if(decimalOccurrences(firstNumber.toString()) || decimalOccurrences(secondNumber.toString())){
    alert("More than one decimal point in a digit is not allowed");
    clearScreen();
  }
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    default:
      return 0;
  }
}

function clearScreen(){
  output = "";
  result = 0;
  operator = '';
  inputField.value = "";
}

function decimalOccurrences(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === '.') {
      count++;
    }
  }
  return count;
}
 // Check if dark mode preference is stored in localStorage
 var darkModePreference = localStorage.getItem('darkMode');
 var isDarkMode = darkModePreference === 'true' ? true : false;
//  console.log(isDarkMode);

 // Update the toggle state and apply dark mode if necessary
 var toggleImage = document.getElementById('dark-mode-toggle');

 if (isDarkMode) {
   enableDarkMode();
 } else {
   disableDarkMode();
 }

 function toggleDarkMode() {
   if (isDarkMode) {
     disableDarkMode();
   } else {
     enableDarkMode();
   }
 }

 function enableDarkMode() {
   document.getElementById('dark-mode').disabled = false;
   localStorage.setItem('darkMode', 'true');
   isDarkMode = true;
   toggleImage.src = 'images/dark-mode.png';
 }

 function disableDarkMode() {
   document.getElementById('dark-mode').disabled = true;
   localStorage.setItem('darkMode', 'false');
   isDarkMode = false;
   toggleImage.src = 'images/light-mode.png';
 }


