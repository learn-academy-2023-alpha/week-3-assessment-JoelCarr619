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
// First will have to take in a number ` n` and return an array of length `n ` containing the numbers of the fibonacci sequences
// I will also use the `for loop` method to generate the rest of the sequence by adding the last two numbers in the squesnce and pushing the sum onto the result array. 




// a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibLength1 = 6;
const expectedFibonacciArray1 = [1, 1, 2, 3, 5, 8];


const fibLength2 = 10;
const expectedFibonacciArray2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

describe('fibonacciArray', () => {
  it('takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.', () => {
    expect(fibonacciArray(fibLength1 )).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])  
  })
})

// b) Create the function that makes the test pass.
const fibonacciArray = (n) => {
  let fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// Psuedo code:
// create the object as an argument, take the values from the object using `object.values()`
// Sort through the values from least to greatest using the `array.sort()` method that will return the sorted value.
// Create an array as an arguement, return the array where each element is the sum of all elements before it in the input array.



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
  describe("sortValues", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest.", () => {
    expect(sortValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
    expect(sortValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});
// b) Create the function that makes the test pass.

const sortValues = (obj) => {
  return Object.values(obj).sort((a, b) => a - b);  
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Psuedo Code:
// Using an array 'Arr' returning an array of the accumilating sum.
// Initializes a variable `sum` to ) and an empty array `result`
// Using a `for loop` to iterate through each element of `arr` adding the current element to `sum` and pushes `sum` onto `result`returning the `result` array.



// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []


// b) Create the function that makes the test pass.

describe('accumulateSum', () => {
  it('returns an empty array when given an empty array', () => {
    expect(accumulateSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulateSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulateSum(accountTransactions3)).toEqual([])
 
  })
})

const accumulateSum = (arr) => {
  if (arr.length === 0) {
    return []
  }
  let result = []
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    result.push(sum)
  }
  return result 
}


