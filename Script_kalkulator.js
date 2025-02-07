// Simple Calculator in Node.js

// Command-line arguments
const args = process.argv.slice(2);

// Check if we have 3 arguments (num1, operator, num2)
if (args.length !== 3) {
  console.log('Usage: node calculator.js <num1> <operator> <num2>');
  process.exit();
}

// Parse numbers
const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

// Check for valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log('Please provide valid numbers.');
  process.exit();
}

// Simple calculator logic
let result;
switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      console.log('Error: Division by zero');
      process.exit();
    }
    result = num1 / num2;
    break;
  default:
    console.log('Invalid operator. Use +, -, *, or /.');
    process.exit();
}

console.log(`Result: ${result}`);
