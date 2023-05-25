class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    push(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  
    pop() {
      if (!this.head) {
        return null;
      }
      let value = this.head.value;
      this.head = this.head.next;
      this.length--;
      return value;
    }
  
    peek() {
      if (!this.head) {
        return null;
      }
      return this.head.value;
    }
  
    isEmpty() {
      return this.length == 0;
    }
  
    printStack() {
      let str = "";
      let currentNode = this.head;
      while (currentNode) {
        str += currentNode.value + " ";
        currentNode = currentNode.next;
      }
      return str;
    }
  }
  
  // example usage
  let stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.printStack()); // output: 30 20 10
  
  console.log(stack.pop()); // output: 30
  
  console.log(stack.peek()); // output: 20
  
  console.log(stack.isEmpty()); // output: false
  