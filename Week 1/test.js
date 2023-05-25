// // function sort(arr){
// //     for(let i=0; i<arr.length; i++){
// //         for(let j=0; j<i; j++){
// //             if(arr[i] > arr[j]){
// //                 let temp= arr[i];
// //                 arr[i] = arr[j];
// //                 arr[j] = temp;
// //             }
// //         }
// //     }
// //     return arr;
// // }
// // console.log(sort([3,2,7,6,10]));
// function findMissingAndRefill(nums) {
//     const n = nums.length;
    
//     // Find the missing number
//     let missing = -1;
//     for (let i = 0; i < n; i++) {
//       const num = Math.abs(nums[i]);
//       if (num <= n) {
//         nums[num - 1] = -Math.abs(nums[num - 1]);
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       if (nums[i] > 0) {
//         missing = i + 1;
//         break;
//       }
//     }
    
  //   // Refill the missing number in the array
  //   for (let i = 0; i < n; i++) {
  //     if (nums[i] < 0) {
  //       nums[i] = -nums[i];
  //     }
  //   }
    
  //   return { missing, nums };
  // }
  // console.log(findMissingAndRefill([4,3,2,7,8,2,3,1]))

//   function even(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2 === 0){
//             arr[i] = 0;
//         }
//     }
//     console.log(arr)
// }
// even([1,2,3,4])

// const arr=[7, 2, 1, 6, 8, 5, 3, 4]

// let j= arr.length-1
// for(let i=0;i<j;i++,j--){
//   console.log([arr[i],arr[j]]=[arr[j],arr[i]]);

// }

function findOddLetter(arr,arr1){
  for(let i =0 ; i<arr.length;i++){
    for(let j = i+1; j<arr1.length; j++){
      if(arr[i]!==arr[j]){
        return arr[j]
      }
    }
  }
}
console.log(findOddLetter('abc','abcd'));