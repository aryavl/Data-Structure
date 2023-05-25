// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp = arr[i];
//         for(let j=0; j<i;j++ ){

//             if(arr[i] < arr[j]){
//              let temp = arr[i];
//              arr[i]=arr[j];
//              arr[j]=temp
//         }
//        }
//     }
//     return arr
// }
//  console.log(bubbleSort([5,-6,2,7,-9])); // [-9,-6,2,5,7]

// // Big-o- O(n^2)

// function bubbleSort(arr){
//     let swapped;
//     let n =arr.length;
//     do{
//         swapped = false
//         for(let i=0; i<n; i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1] = temp;
//                 swapped = true;
//             }
//         }
//         n--;
//     }while(swapped);
//     return arr;

    
// }
// console.log(bubbleSort([9,5,7,-2,6]));

// function bubbleSort(arr) {
//     let n = arr.length;
//     for(let i = 0; i < n-1; i++) {
//       let swapped = false;
//       for(let j = 0; j < n-i-1; j++) {
//         if(arr[j] > arr[j+1]) {
//           [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//           swapped = true;
//         }
//       }
//       console.log(swapped);
//     }
//     return arr;
//   }
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  
  do {
    swapped = false;
    let i = 0;
    
    while (i < n - 1) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
      i++;
    }
    
    n--;
  } while (swapped);
  
  return arr;
}

  const arr3 = [11, 1, 8, 7, 2, 3];
  console.log(bubbleSort(arr3)); // Output: [1, 2, 3, 7, 8, 11]