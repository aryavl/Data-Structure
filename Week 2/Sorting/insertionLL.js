// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//     }
  
//     append(value) {
//       const newNode = new Node(value);
  
//       if (!this.head) {
//         this.head = newNode;
//         this.tail = newNode;
//       } else {
//         this.tail.next = newNode;
//         this.tail = newNode;
//       }
  
//       this.length++;
//     }
  
//     insertionSort() {
//       if (!this.head || !this.head.next) {
//         return this.head;
//       }
  
//       let sorted = null;
//       let current = this.head;
  
//       while (current) {
//         let nextNode = current.next;
//         sorted = this.insert(sorted, current);
//         current = nextNode;
//       }
  
//       this.head = sorted;
//     }
  
//     insert(sorted, node) {
//       if (!sorted || node.value < sorted.value) {
//         node.next = sorted;
//         return node;
//       }
  
//       let current = sorted;
//       while (current.next && node.value > current.next.value) {
//         current = current.next;
//       }
  
//       node.next = current.next;
//       current.next = node;
//       return sorted;
//     }
//   }
  
//   const list = new LinkedList();
//   list.append(3);
//   list.append(2);
//   list.append(1);
//   list.append(4);
//   list.append(5);
  
//   console.log("Before sorting: ");
//   let node = list.head;
//   while (node) {
//     console.log(node.value);
//     node = node.next;
//   }
  
//   list.insertionSort();
  
//   console.log("After sorting: ");
//   node = list.head;
//   while (node) {
//     console.log(node.value);
//     node = node.next;
//   }
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
    }
  
    insertionSort() {
      this.head = this.insertionSortRec(this.head);
    }
  
    insertionSortRec(head) {
      if (!head || !head.next) {
        return head;
      }
  
      let sorted = this.insertionSortRec(head.next);
  
      if (head.value <= sorted.value) {
        head.next = sorted;
        return head;
      }
  
      let current = sorted;
      while (current.next && head.value > current.next.value) {
        current = current.next;
      }
  
      head.next = current.next;
      current.next = head;
  
      return sorted;
    }
  }
  
  const list = new LinkedList();
  list.append(3);
  list.append(2);
  list.append(1);
  list.append(4);
  list.append(5);
  
  console.log("Before sorting: ");
  let node = list.head;
  console.log("node",node);
  while (node) {
    console.log(node.value);
    node = node.next;
  }
  
  list.insertionSort();
  
  console.log("After sorting: ");
  node = list.head;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
  