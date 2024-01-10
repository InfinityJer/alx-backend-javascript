// Define interfaces with a number property named credits and a brand property for uniqueness
interface MajorCredits {
  credits: number;
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Create two functions that sum the credits of two subjects and return the corresponding interface
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "major" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "minor" };
}

// Example usage
const subject1: MajorCredits = { credits: 30, brand: "major" };
const subject2: MajorCredits = { credits: 20, brand: "major" };

const resultMajor = sumMajorCredits(subject1, subject2);
console.log(resultMajor); // Output: { credits: 50, brand: 'major' }

const subject3: MinorCredits = { credits: 15, brand: "minor" };
const subject4: MinorCredits = { credits: 10, brand: "minor" };

const resultMinor = sumMinorCredits(subject3, subject4);
console.log(resultMinor); // Output: { credits: 25, brand: 'minor' }
