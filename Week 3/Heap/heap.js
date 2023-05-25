// class BinaryHeap{
//     constructor(){
//         this.list = []
//     }
//     maxHeapify(arr,n,i){
//         let largest = i;
//         let left = 2*i + 1;
//         let right = 2 * i +2;

//         if(left < n && arr[left] > arr[largest]){
//             largest = left;
//         }
//         if(right < n && arr[right] > arr[largest]){
//             largest = right;
//         }

//         if(largest !== i){
//             [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         }

//         this.maxHeapify(arr,n,largest)
//     }
//     insert(num){
//         let size = this.list.length;
//         if(size === 0){
//             this.list.push(num)
//         }else{
//             this.list.push(num)

//             // heapify
//             // first index of non - leaf node
//            // for(let i = this.list.length/2 -1; )
//         }
//     }
// }

class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    extractMax() {
      const max = this.heap[0];   
         const lastElement = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastElement;
        this.heapifyDown();
      }
  
      return max;
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[currentIndex] <= this.heap[parentIndex])
          break;
  
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      }
    }




  
    heapifyDown() {
      let currentIndex = 0;
  
      while (currentIndex < this.heap.length) {
        const leftChildIndex = (2 * currentIndex) + 1;
        const rightChildIndex = (2 * currentIndex) + 2;
        let largestIndex = currentIndex;
  
        if (leftChildIndex > this.heap.length && this.heap[leftChildIndex] < this.heap[largestIndex])
          largestIndex = leftChildIndex;
  
        if (rightChildIndex > this.heap.length && this.heap[rightChildIndex] <this.heap[largestIndex])
          largestIndex = rightChildIndex;
  
        if (largestIndex === currentIndex)
          break;
  
        [this.heap[currentIndex], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[currentIndex]];
        currentIndex = largestIndex;
        
      }
    }
        extractMin() {
      
  
      const min = this.heap[0];
      const last = this.heap.pop();
  
      if (this.heap.length>0) {
        this.heap[0] = last;
        this.heapifyDown();
      }
  
      return min;
    }
    print(){
        for(let i=0; i<this.heap.length;i++){
            console.log(this.heap[i]+" ");
        }
    }
  }
  
  // Example usage:
  const maxHeap = new MaxHeap();
  maxHeap.insert(10);
  maxHeap.insert(20);
  maxHeap.insert(5);
  maxHeap.insert(25);
  console.log(maxHeap.heapifyUp()); // Output: 20
//   maxHeap.print()
//   console.log(maxHeap.extractMax()); // Output: 20
  console.log(maxHeap.extractMin()); // Output: 20

// <---- Min Heap  ----->
  
// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.heapifyUp();
//     }
  
//     extractMin() {
//       if (this.isEmpty()) {
//         return null;
//       }
  
//       const min = this.heap[0];
//       const last = this.heap.pop();
  
//       if (!this.isEmpty()) {
//         this.heap[0] = last;
//         this.heapifyDown();
//       }
  
//       return min;
//     }
  
//     heapifyUp() {
//       let currentIndex = this.heap.length - 1;
  
//       while (currentIndex > 0) {
//         const parentIndex = Math.floor((currentIndex - 1) / 2);
//         if (this.heap[currentIndex] >= this.heap[parentIndex]) {
//           break;
//         }
//         [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
//         currentIndex = parentIndex;
//       }
//     }
  
//     heapifyDown() {
//       let currentIndex = 0;
  
//       while (currentIndex < this.heap.length) {
//         const leftChildIndex = 2 * currentIndex + 1;
//         const rightChildIndex = 2 * currentIndex + 2;
//         let minIndex = currentIndex;
  
//         if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
//           minIndex = leftChildIndex;
//         }
  
//         if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
//           minIndex = rightChildIndex;
//         }
  
//         if (minIndex === currentIndex) {
//           break;
//         }
  
//         [this.heap[currentIndex], this.heap[minIndex]] = [this.heap[minIndex], this.heap[currentIndex]];
//         currentIndex = minIndex;
//       }
//     }
  
//     isEmpty() {
//       return this.heap.length === 0;
//     }
//   }
  
//   // Usage example:
//   const minHeap = new MinHeap();
//   minHeap.insert(5);
//   minHeap.insert(10);
//   minHeap.insert(3);
//   console.log(minHeap.extractMin()); // Output: 3
//   console.log(minHeap.extractMin()); // Output: 5
//   console.log(minHeap.extractMin()); // Output: 10
  