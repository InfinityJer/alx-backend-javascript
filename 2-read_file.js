const fs = require('fs');

function countStudents(path) {
    try {
        // Read the contents of the file synchronously
        const data = fs.readFileSync(path, 'utf8');

        // Split the data into an array of lines
        const lines = data.trim().split('\n');

        // Initialize variables to count students in each field
        let csCount = 0;
        let sweCount = 0;
        const csList = [];
        const sweList = [];

        // Iterate over each line of the file
        lines.forEach(line => {
            // Split each line into fields
            const [firstName, lastName, age, field, email] = line.split(',');

            // Check if the field is CS or SWE and update counts and lists accordingly
            if (field === 'CS') {
                csCount++;
                csList.push(firstName);
            } else if (field === 'SWE') {
                sweCount++;
                sweList.push(firstName);
            }
        });

        // Log the number of students and their lists to the console
        console.log(`Number of students: ${lines.length}`);
        console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
        console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
    } catch (error) {
        // If an error occurs, log an error message
        console.error('Cannot load the database');
        // Optionally, re-throw the error to let the caller handle it
        // throw error;
    }
}

module.exports = countStudents;
