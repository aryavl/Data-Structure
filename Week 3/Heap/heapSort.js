// Helper function to swap elements in an array
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // Heapify function to maintain the heap property
  function heapify(arr, n , i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      swap(arr, i, largest);
      heapify(arr, n, largest);
    }
  }
  
  // Heap Sort function
  function heapSort(arr) {
    const n = arr.length;
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extract elements from the heap in sorted order
    for (let i = n - 1; i > 0; i--) {
      swap(arr, 0, i);
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // Example usage:
  const arr = [7, 2, 5, 1, 9, 3];
  console.log("Original array:", arr);
  const sortedArr = heapSort(arr);
  console.log("Sorted array:", sortedArr);
  