// function reverseStringWithStack(arr) {
//     const stack = [];
//     const input = arr[0];
  
//     // Push each character of the input string onto the stack
//     for (let i = 0; i < input.length; i++) {
//       stack.push(input[i]);
//     }
  
//     let reversedString = "";
  
//     // Pop each character from the stack and append it to the reversed string
//     while (stack.length > 0) {
//       reversedString += stack.pop();
//     }
  
//     // Concatenate the reversed string with the original string
//     const output = input + reversedString;
  
//     // Update the original array
//     arr[0] = output;
//   }
  
//   const arr = ["abc"];
//   reverseStringWithStack(arr);
//   console.log(arr); // Output: ["abccba"]


// function getReversedArray(arr) {
//     const stack = [];
//     const output = [];
//     let out=""
  
//     // Push each element of the input array onto the stack
//     for (let i = 0; i <arr.length; i++) {
//       stack.push(arr[i]);
//     }
  
//     // Pop elements from the stack and store them in the output array
//     while (stack.length > 0) {
//       output.push(stack.pop());
//     }
//    output.pop()
//     return output;
//   }
  
//   const input = [1, 2, 3, 4, 5];
//   const reversedArray = getReversedArray(input);
//   console.log(reversedArray); // Output: [5, 4, 3, 2]
  
  
function isParenthesisValid(expression) {
    const stack = [];

    for(let i=0; i<expression.length; i++){
        let currentChar = expression[i];

        if(currentChar === '(' || currentChar ==='[' || currentChar === '{'){
            stack.push(currentChar)
        }
        else if(currentChar ===')' || currentChar === ']' || currentChar === '}'){
            if(stack.length === 0){
                return false;
            }

            const top = stack.pop()

            if((currentChar ===')' && top !== "(") || (currentChar ===']' && top!== '[')|| (currentChar ==='{' && pop!=='}')){
                return false
            }
        }
    }
    return stack.length === 0
}
  
  // Test the function with some examples
  const expression1 = "(){}[]";
  console.log(isParenthesisValid(expression1)); // Output: true
  
  const expression2 = "({[}])";
  console.log(isParenthesisValid(expression2)); // Output: false
  
  const expression3 = "((({})))";
  console.log(isParenthesisValid(expression3)); // Output: true
  