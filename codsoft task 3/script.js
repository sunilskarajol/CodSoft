// Get the display element
let display = document.getElementById('display');
let currentValue = '';

// Initialize the display with an empty value
display.value = '';

// Append value to the display
function appendValue(value) {
    currentValue += value; // Add the new value to the current input
    display.value = currentValue; // Update the display
}

// Clear the display
function clearDisplay() {
    currentValue = ''; // Reset the stored value
    display.value = ''; // Clear the display
}

// Calculate the result
function calculateResult() {
    try {
        // Evaluate the mathematical expression
        currentValue = eval(currentValue).toString(); // Convert the result to a string
        display.value = currentValue; // Display the result
    } catch (error) {
        // Handle invalid expressions
        display.value = 'Error'; // Show error message
        currentValue = ''; // Reset the stored value
    }
}
