// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target) return i;

//     }
//     return -1;
// }
//  console.log(linearSearch([-5,2,4,6,10],10));

// function search(arr,target){
// for(let i=0; i<arr.length; i++){
// 	if(arr[i] === target)
// 		return i;	
// }
// return -1;

// }
// console.log(search([1,2,4,5],3));



// function binarySearch(arr,target){
//     let startIndex=0;
//     let endIndex=arr.length -1 ;
//     while(startIndex <= endIndex){
//         let middleIndex= Math.floor((startIndex+endIndex)/2);
//         if(target === arr[middleIndex]){
//             return middleIndex;
//         }
//         if(target < arr[middleIndex]){
//             endIndex=middleIndex -1;
//         }else{
//             startIndex=middleIndex + 1;
//         }

//     }
//     return -1;
// }

// // console.log(binarySearch([-5,2,4,6,10],10));
// // console.log(binarySearch([-5,2,4,6,10],6));
// // console.log(binarySearch([-5,2,4,6,10],20));
// // Recursive binary search

// function recursiveBinary(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex) {return -1;}
//     let middleIndex=Math.floor((leftIndex+rightIndex)/2);
//     if(target === arr[middleIndex]) return middleIndex;
//     if(target< arr[middleIndex]){
//      return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//      return search(arr,target,middleIndex+1, rightIndex);
//     }
// }

// console.log(recursiveBinary([-5,2,4,6,10]),6);

// function binarySearch(arr,target){
//    let startIndex=0;
//    let endIndex= arr.length -1;

//    while(startIndex <= endIndex){
//     let middleIndex = Math.floor((startIndex + endIndex)/2);

//     if(target === arr[middleIndex]){
//         return middleIndex;
//     }
//     if(target < arr[middleIndex]){
//         endIndex= middleIndex - 1;
//     }else{
//         startIndex = middleIndex + 1;
//     }
//    }
//    return -1
// }
//     console.log(binarySearch([-5,2,4,6,10],2) )//4
    
// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,startIndex,endIndex) {
//     if(startIndex > endIndex){
//         return -1;
//     }
//     let middleIndex = Math.floor((startIndex + endIndex)/2);
//     if(target ===arr[middleIndex]){
//         return middleIndex;
//     }
//     if(target < arr[middleIndex]){
//        return search(arr,target,startIndex,middleIndex -1)
//     }else{
//       return search(arr,target,middleIndex+1,endIndex)
//     }
//   }

//   console.log(recursiveBinarySearch([-5,2,4,6,10]),10);

// function binarySearch(arr, target, start = 0, end = arr.length - 1) {
//     // Base case: if the search range is empty, return -1 (not found)
//     if (start > end) {
//       return -1;
//     }
  
//     // Calculate the middle index of the search range
//     const mid = Math.floor((start + end) / 2);
  
//     // If the target is found at the middle index, return the index
//     if (arr[mid] === target) {
//       return mid;
//     }
  
//     // If the target is less than the middle element, search the left half
//     if (arr[mid] > target) {
//       return binarySearch(arr, target, start, mid - 1);
//     }
  
//     // If the target is greater than the middle element, search the right half
//     if (arr[mid] < target) {
//       return binarySearch(arr, target, mid + 1, end);
//     }
//   }
//   const arr = [1, 2, 3, 4, 5, 6, 7];
// const targetIndex = binarySearch(arr, 6);
// console.log(targetIndex); // 3

function recursiveBinary(arr,target,start=0,end=arr.length-1){
    if(start > end){
        return -1;
    }
    let mid= Math.floor((start + end)/2);
    if(target === arr[mid]){
        return mid;
    }
    if(target < arr[mid]){
       return recursiveBinary(arr,target,start,mid - 1);
    }
    if(target > arr[mid]){
        return recursiveBinary(arr,target,mid+1,end)
    }
}

console.log(recursiveBinary([1,2,3,4,5,6,7],4)); //3
