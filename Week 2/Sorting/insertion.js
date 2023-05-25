// function insertionSort(arr) { 
//     for(let i=1;i<arr.length; i++){
//         let numberToInsert = arr[i];
//         let j = i-1;
//         while( j>=0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j]
//             j=j-1;
//         }
//         arr[j+1] = numberToInsert
//     }
//     return arr;
//  }
//  const arr = [8,20,-2,4,-6];

// console.log(insertionSort(arr));

// // Time complexity : O(n^2)
// // space complexity : O(1);
 
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let currentVal = arr[i];
//       let j = i - 1;
//       while (j >= 0 && arr[j].localeCompare(currentVal) > 0) {
//         arr[j+1] = arr[j];
//         j--;
//       }
//       arr[j+1] = currentVal;
//     }
//     return arr;
//   }
  
//   let myArray = ["banana", "apple", "orange", "grape", "pineapple"];
//   console.log(insertionSort(myArray)); // ["apple", "banana", "grape", "orange", "pineapple"]
  
// function insertionSort(arr, prop) {
//     for (let i = 1; i < arr.length; i++) {
//       let currentVal = arr[i];
//       let j = i - 1;
//       while (j >= 0 && arr[j][prop] > currentVal[prop]) {
//         arr[j+1] = arr[j];
//         j--;
//       }
//       arr[j+1] = currentVal;
//     }
//     return arr;
//   }
  
//   let myArray = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 32 },
//     { name: "Bob", age: 18 },
//     { name: "Karen", age: 28 },
//   ];
//   console.log(insertionSort(myArray, "age")); // [{name: "Bob", age: 18}, {name: "John", age: 25}, {name: "Karen", age: 28}, {name: "Alice", age: 32}]
  
function insertionSort(array) {
  const length = array.length;
  let i = 1;

  while (i < length) {
    let j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      // Swap array[j] and array[j - 1]
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j--;
    }

    i++;
  }

  return array;
 }
 const arr = [8,20,-2,4,-6];

console.log(insertionSort(arr));

