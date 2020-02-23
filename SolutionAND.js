/**
* The following is the function where the solution shall be written
*/

function solution (input) {
  //try block to enforce error handling
  try { 
    let result = [];
    input = input.replace(/[^\d]/g, '');
    //check for input without any digits
    if (input.length == 0) {
      throw new Error('The input does not contain a digit');
    }
    //last digit of each permutation added to the end of the digit
    if (input.length == 1) {
      result.push(input);
      return result;
    }
    //for loop grabs first digit of the valid input than 
    //iterates through the variations of subsequent numbers
    for (var i = 0; i < input.length; i++) {
      let firstDigit = input[i];  
      let remainingDigits = input.substring(0, i) + input.substring(i + 1);     
      let otherPermutations = solution(remainingDigits);
      //returns all first digits + permutation variations by adding the remainingn variations to the first digit
      for (var j = 0; j < otherPermutations.length; j++) {
        result.push(firstDigit + otherPermutations[j]);
      }
    }
    //returns result in desceding order
    return result.sort().reverse();
  //custom error handling
  } catch (e) {
      let errorMessage = e.name + ': ' + e.message;
      return errorMessage;
  }
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC')); //expected output String = 'Error: The input does not contain a digit'