// // implement queue using stack

// class Queue{
//   constructor(){
//     this.enqueueStack=[]
//     this.dequeueStack=[]
//   }
//   enqueue(value){
//     this.enqueueStack.push(value)
//   }
//   dequeue(){
//     if(this.dequeueStack.length === 0){
//       while(this.enqueueStack.length > 0){
//         this.dequeueStack.push(this.enqueueStack.pop())
//       }
//     }
//     return this.dequeueStack.pop()
//   }
//   peek(){
//     if(this.dequeueStack.length === 0){
//       return this.dequeueStack[0]
//     }
//     return this.dequeueStack[this.dequeueStack.length -1]
//   }
// }
// class Queue {
//     constructor() {
//       this.enqueueStack = [];
//       this.dequeueStack = [];
//     }
  
//     enqueue(value) {
//       // Push the value onto the enqueue stack
//       this.enqueueStack.push(value);
//     }
  
//     dequeue() {
//       // If the dequeue stack is empty, transfer elements from enqueue stack
//       if (this.dequeueStack.length === 0) {
//         // Transfer elements from enqueue stack to dequeue stack in reverse order
//         while (this.enqueueStack.length > 0) {
//           this.dequeueStack.push(this.enqueueStack.pop());
//         }
//       }
  
//       // Pop element from the dequeue stack and return it
//       return this.dequeueStack.pop();
//     }
  
//     peek() {
//       // If the dequeue stack is empty, peek the top element from the enqueue stack
//       if (this.dequeueStack.length === 0) {
//         return this.enqueueStack[0];
//       }
  
//       // Peek the top element from the dequeue stack
//       return this.dequeueStack[this.dequeueStack.length - 1];
//     }
  
//     isEmpty() {
//       // The queue is empty if both stacks are empty
//       return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
//     }
  
//     size() {
//       // The size of the queue is the combined size of both stacks
//       return this.enqueueStack.length + this.dequeueStack.length;
//     }
//   }
  
//   // Example usage:
//   const queue = new Queue();
  
//   queue.enqueue(1);
//   queue.enqueue(2);
//   queue.enqueue(3);
  
//   console.log(queue.dequeue()); // Output: 1
//   console.log(queue.dequeue()); // Output: 2
  
//   queue.enqueue(4);
  
//   console.log(queue.peek()); // Output: 3
//   console.log(queue.isEmpty()); // Output: false
//   console.log(queue.size()); // Output: 2

  class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(element) {
      this.queue1.push(element);
    }
  
    pop() {
      if (this.empty()) {
        throw new Error("Stack is empty.");
      }
  
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      const element = this.queue1.shift();
  
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return element;
    }
  
    top() {
      if (this.empty()) {
        throw new Error("Stack is empty.");
      }
  
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      const element = this.queue1.shift();
      this.queue2.push(element);
  
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return element;
    }
  
    empty() {
      return this.queue1.length === 0 && this.queue2.length === 0;
    }
  }
  
  const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());  // Output: 3
console.log(stack.top());  // Output: 2
console.log(stack.empty());  // Output: false

  