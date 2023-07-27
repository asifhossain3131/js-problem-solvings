// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const stringReverser=(inputStr)=>{
    let reversedStr=''
    for(let i=inputStr.length-1;i>=0;i-- ){
        reversedStr+=inputStr[i]
    }
    return reversedStr
}

const inputStr='Hello world'
const reversedString=stringReverser(inputStr)


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const  positiveNumCalculator=inputArr=>{
        let sum=0
        for(const num of inputArr){
            if(num>0){
                sum+=num
            }
        }
        return sum
    }
    
    const inputArr=[12,-3,-4,23,-4,12]
    const positiveNumSum=positiveNumCalculator(inputArr)

    // Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
    const findMostFrequentElement=arr=>{
        let frequentNumber = {};
        for (const element of arr) {
          if (frequentNumber[element]) {
            frequentNumber[element]++;
          } else {
            frequentNumber[element] = 1;
          }
        }
        let mostFrequentElement;
        let mostFrequent = 0;
        for (const element in frequentNumber) {
          if (frequentNumber[element] > mostFrequent) {
            mostFrequentElement = element;
            mostFrequent = frequentNumber[element];
          }
        }
      
        return mostFrequentElement;
      }

      const array = [3, 5, 2, 5, 3, 3, 1, 4, 5]
      const mostFrequentNum = findMostFrequentElement(array);


    //   Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
    const findTwoNumbersSum=(arr, target)=> {
        const totalNumbers = arr.length;
      
        for (let i = 0; i < totalNumbers - 1; i++) {
          for (let j = i + 1; j < totalNumbers; j++) {
            const sum = arr[i] + arr[j];
      
            if (sum === target) {
              return sum; 
            }
          }
        }
        return [];
      }
      
      const sortedArray = [1, 3, 6, 8, 11, 15];
      const targetValue = 9;
      const sumOfTwoNumbers = findTwoNumbersSum(sortedArray, targetValue);


    //   Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
    const simpleCalculator=(num1,num2,operator)=>{
            if(operator==='+'){
                return num1+num2
            }
            else if(operator==='-'){
                return num1-num2
            }
            else if(operator==='*'){
                return num1*num2
            }
            else if(operator==='/'){
                return num1/num2
            }
            else{
                return 'please provide a valid operator'
            }
        }
        
        const calculation=simpleCalculator(12,13,'+')


        // Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const randomPasswordGenerator=length=> {
    let password = ''
  const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
  const allNumbers = '0123456789';
  const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const mixings = capitalLetters + smallLetters + allNumbers + specialCharacters;
  const mixingsLength = mixings.length;

  for (let i = 0; i < length; i++) {
    const randomGenerator = Math.floor(Math.random() * mixingsLength);
    password += mixings.charAt(randomGenerator);
  }

  return password;
}

const passwordLength = 24
const generatedPassword = randomPasswordGenerator(passwordLength);


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value



