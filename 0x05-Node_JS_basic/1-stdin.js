// File: 1-stdin.js

// Display the initial message
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for input from the user on stdin
process.stdin.on('data', (data) => {
    // Extract the input from the data event
    const name = data.toString().trim();

    // Display the user's name
    console.log(`Your name is: ${name}`);

    // Display the closing message
    console.log("This important software is now closing");
    
    // Exit the process
    process.exit();
});
