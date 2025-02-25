// Query selecting the display id from the html
const display = document.querySelector("#display");

// console.log(display); // Testing the query selector

let currentExpression = ""; // Creating a variable to store the current expression

// Creating a function to display the value of the button clicked

function toDisplay(value) {
  // Append the clicked button's value to the current expression

  currentExpression += value;
  display.textContent = currentExpression;
}

// Creating a function to clear the display
function clearTheDisplay() {
  currentExpression = "";
  display.textContent = "";
}

// creating a function to calculate result
function calculateResult() {
  try {
    const result = eval(currentExpression);
    //   error checking if its not number and if the result is not infinity
    if (isNaN(result) || !isFinite(result)) {
      // display error message
      display.textContent = "Error";
    } else {
      display.textContent = result;
    }
  } catch (error) {
    // still handles any errors that are not caught by the first check
    display.textContent = "Error";
  }
}

// Creating a function to calculate percentage
function percentage() {
  display.textContent = display.textContent / 100;
}

const equalsButton = document.querySelector(".equals-to"); // Query selecting the equals button

equalsButton.addEventListener("click", calculateResult); // Adding an event listener to the equals button
