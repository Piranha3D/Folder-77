// Define the number of rows for the half triangle
let numberOfRows = 5;

// Loop through each row
for (let i = 1; i <= numberOfRows; i++) {
    let row = '';
    
    // Add stars for the current row
    for (let j = 1; j <= i; j++) {
        row += '*';
    }

    // Print the current row to the console
    console.log(row);
}