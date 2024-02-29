// Display the initial message asking for the user's name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data on stdin
process.stdin.on('readable', () => {
  // Read the data from stdin
  const chunk = process.stdin.read();

  // If data is available
  if (chunk) {
    // Display the user's name
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// When stdin ends (user closes the input stream)
process.stdin.on('end', () => {
  // Display the closing message
  process.stdout.write('This important software is now closing\n');
});
