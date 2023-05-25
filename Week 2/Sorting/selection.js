// function selectionSort(arr) {
//     // Loop through the array
//     for (let i = 0; i < arr.length - 1; i++) {
//       let minIndex = i; // Assume the current element is the minimum
//       // Loop through the remaining unsorted elements to find the minimum
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j; // Update the index of the minimum element
//         }
//       }
//       // Swap the minimum element with the first element of the unsorted array
//       if (minIndex !== i) {
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//       }
//     }
//     return arr;
//   }
  
//   // Example usage:
//   let arr = [64, 25, 12, 22, 11];
//   let sortedArr = selectionSort(arr);
//   console.log(sortedArr); // Output: [11, 12, 22, 25, 64]
  

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
//       if (minIndex !== i) {
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//       }
//     }
//     return arr;
//   }
  
//   const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
//   console.log(selectionSort(arr)); // Output: ['apple', 'banana', 'grape', 'kiwi', 'orange']
  

function selectionSort(arr, property) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j][property] < arr[minIndex][property]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]   
      }
    }
    return arr;
  }
  
  const arr = [  { name: 'John', age: 30 },  { name: 'Jane', age: 25 },  { name: 'Bob', age: 35 },  { name: 'Alice', age: 28 }];
  
  console.log(selectionSort(arr, 'age')); // Output: [{ name: 'Jane', age: 25 }, { name: 'Alice', age: 28 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]
  