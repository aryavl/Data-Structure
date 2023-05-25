// function mergeSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);
  
//     return merge(mergeSort(left), mergeSort(right));
//   }
  
//   function merge(left, right) {
//     let i = 0;
//     let j = 0;
//     const merged = [];
  
//     while (i < left.length && j < right.length) {
//       if (left[i] < right[j]) {
//         merged.push(left[i]);
//         i++;
//       } else {
//         merged.push(right[j]);
//         j++;
//       }
//     }
  
//     return [...merged, ...left.slice(i), ...right.slice(j)];
//   }
//   const arr = [5, 2, 7, 1, 9, 3];
// const sortedArr = mergeSort(arr);
// console.log(sortedArr); // [1, 2, 3, 5, 7, 9]

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const a = [10, 20, 30];
const b = [35, 25, 15];
const merged = mergeSort([...a, ...b]);

console.log(merged);

