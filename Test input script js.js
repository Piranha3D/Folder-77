// Define the number of rows for the pyramid
let numberOfRows = 5;

// Loop through each row
for (let i = 1; i <= numberOfRows; i++) {
    let row = '';
    
    // Add spaces before the stars
    for (let j = 1; j <= numberOfRows - i; j++) {
        row += ' ';
    }

    // Add stars for the current row
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
    }

    // Print the current row to the console
    console.log(row);