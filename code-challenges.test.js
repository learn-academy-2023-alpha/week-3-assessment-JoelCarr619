// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// Psuedo code:
// First will have to take in a number ` ` and return an array of length ` ` containing the numbers of the fibonacci sequences
// I will also use the `for loop` method to generate the rest of the sequence by adding the last two numbers in the squesnce and pushing the sum onto the result array. 

const fibonacciArray = (array) => {
    if (array < 3) {
      return new error(`number should be greater than or equal to 3`);
    }
} 


// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



const result = [0, 1]; 
for(let i = 2; i < 0; i++) {
  const a = result[i - 1];
  const b = result[i - 2];
  result.push(a + b);
}
return result;

// b) Create the function that makes the test pass.

const fibLength1Result = fibonacciArray(6);
exportAllDeclaration(fibLength1Result).toEqual([0, 1, 1, 2, 3, 5]);

const fibLength2Result = fibonacciArray(10);
exportAllDeclaration(fibLength1Result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// Psuedo code:
// create the object as an argument, take the values from the object using `object.values()`
// Sort through the values from least to greatest using the `array.sort()` method that will return the sorted value.
// Create an array as an arguement, return the array where each element is the sum of all elements before it in the input array.

const sortValues = (obj) => {
  return object.values(obj).sort((a, b) => a - b);  
}

// a) Create a test with expect statements for each of the variables provided.

// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("sortValues", () => {
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60,
  };
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65,
  };

// b) Create the function that makes the test pass.

  it("should return an array of values sorted from least to greatest for studyMinutesWeek1", () => {
    expect(sortValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
  });

  it("should return an array of values sorted from least to greatest for studyMinutesWeek2", () => {
    expect(sortValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Psuedo Code:
// Using an array 'Arr' returning an array of the accumilating sum.
// Initializes a variable `sum` to ) and an empty array `result`
// Using a `for loop` to iterate through each element of `arr` adding the current element to `sum` and pushes `sum` onto `result`returning the `result` array.

const accumulatingSum = (arr) => {
  let sum = 0;
  const result = []; 
  for (let i = 0;  i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }

}

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

const accountTransactions1Result = accumulatingSum(accountTransactions1);
exportAllDeclaration(accountTransactions1Result).toEqual([100, 83, 60, 51])

const accountTransactions2Result = accumulatingSum(accountTransactions2);
exportAllDeclaration(accountTransactions2Result).toEqual([250, 161, 261, 165])

const accountTransactions3Result = accumulatingSum(accountTransactions3);
exportAllDeclaration(accountTransactions3Result).toEqual([])

// b) Create the function that makes the test pass.
