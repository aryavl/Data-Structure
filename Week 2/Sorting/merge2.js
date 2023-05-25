function merge(leftArr, rightArr) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Comparing elements from the left and right arrays and merging them in sorted order
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        mergedArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        mergedArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
  
    // Adding any remaining elements from the left array
    while (leftIndex < leftArr.length) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    }
  
    // Adding any remaining elements from the right array
    while (rightIndex < rightArr.length) {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  
    return mergedArr;
  }
  
  
//   console.log(merge([1,2,3],[4,5,6]));
  const a = [10, 20, 30];
const b = [35, 25, 15];
const merged = merge(a,b);
console.log(merged);