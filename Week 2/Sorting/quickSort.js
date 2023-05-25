// function quickSort(arr) { 
//     if (arr.length < 2) {
//         return arr;
//       }
//     let pivot = arr[arr.length - 1];
//     let left=[];
//     let right=[]
//     for(let i =0;i<arr.length-1; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
//  }
//  console.log(quickSort([3,1,4,1,5,9,2,6,5,4]));

// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left >= right) {
//       return;
//     }
  
//     const pivotIndex = partition(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
  
//   function partition(arr, left, right) {
//     const pivotValue = arr[right];
//     let partitionIndex = left;
  
//     for (let i = left; i < right; i++) {
//       if (arr[i] < pivotValue) {
//         swap(arr, i, partitionIndex);
//         partitionIndex++;
//       }
//     }
  
//     swap(arr, partitionIndex, right);
//     return partitionIndex;
//   }
  
//   function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
  
//   const array = [7, 2, 1, 6, 8, 5, 3, 4];
// quickSort(array);
// console.log(array); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// function partition(arr, low, high) {
//   const pivot = arr[high];
//   let i = low - 1;

//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

//   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//   return i + 1;
// }

// function quickSort(arr, low = 0, high = arr.length - 1) {
//   if (low < high) {
//     const pi = partition(arr, low, high);
//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
// }
// function partition(arr, low, high) {
//   const pivot = arr[high]; // Choose the pivot as the last element
//   let i = low - 1; // Index of the smaller element

//   // Iterate over the subarray from low to high-1
//   for (let j = low; j < high; j++) {
//     // If the current element is smaller than or equal to the pivot
//     if (arr[j] <= pivot) {
//       i++; // Increment the index of the smaller element
//       // Swap arr[i] and arr[j]
//       // const temp = arr[i];
//       // arr[i] = arr[j];
//       // arr[j] = temp;
//       [arr[i],arr[j]]=[arr[j],arr[i]]
//     }
//   }

//   // Swap the pivot element (arr[high]) with the element at index (i+1)
//   // const temp = arr[i + 1];
//   // arr[i + 1] = arr[high];
//   // arr[high] = temp;
//   [arr[i+1],arr[high]]=[arr[high],arr[i+1]]

//   // Return the partition index
//   return i + 1;
// }

// function quickSort(arr, low = 0, high = arr.length - 1) {
//   if (low < high) {
//     // Partition the array and get the pivot index
//     const pi = partition(arr, low, high);

//     // Recursively sort the subarrays before and after the pivot
//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
// }function quickSort(arr, low = 0, high = arr.length - 1) {
  

//   const array = [7, 2, 1, 6, 8, 5, 3, 4];
// quickSort(array);
// console.log(array); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    if (low < pivotIndex - 1) {
      quickSort(arr, low, pivotIndex - 1); // Recursively sort the left partition
    }
    if (pivotIndex < high) {
      quickSort(arr, pivotIndex, high); // Recursively sort the right partition
    }
  }

  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[Math.floor((low + high) / 2)]; // Choose the middle element as the pivot
  let i = low;
  let j = high;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j); // Swap elements that are out of order
      i++;
      j--;
    }
  }

  return i; // Return the pivot index
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Example usage:
const array = [9, 4, 7, 2, 1, 5, 6, 8, 3];
quickSort(array);
console.log(array);

