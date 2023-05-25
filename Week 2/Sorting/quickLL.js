class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function quickSortLinkedList(head) {
    if (!head || !head.next) {
      return head;
    }
    
    const pivot = head;
    let current = head.next;
    let left = null;
    let right = null;
    let leftTail = null;
    let rightTail = null;
    
    while (current) {
      const next = current.next;
      current.next = null;
      
      if (current.val < pivot.val) {
        if (!left) {
          left = current;
          leftTail = current;
        } else {
          leftTail.next = current;
          leftTail = current;
        }
      } else {
        if (!right) {
          right = current;
          rightTail = current;
        } else {
          rightTail.next = current;
          rightTail = current;
        }
      }
      
      current = next;
    }
    
    const sortedLeft = quickSortLinkedList(left);
    const sortedRight = quickSortLinkedList(right);
    
    if (!sortedLeft) {
      pivot.next = sortedRight;
      return pivot;
    } else {
      let leftTail = sortedLeft;
      
      while (leftTail.next) {
        leftTail = leftTail.next;
      }
      
      leftTail.next = pivot;
      pivot.next = sortedRight;
      return sortedLeft;
    }
  }
  
  const node1 = new Node(3);
  const node2 = new Node(1);
  const node3 = new Node(4);
  const node4 = new Node(2);
  const node5 = new Node(7);
  const node6 = new Node(5);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  
  const sortedList = quickSortLinkedList(node1);
  console.log(sortedList); // Output: Node {val: 1, next: Node {val: 2, next: Node {val: 3, next: Node {val: 4, next: Node {val: 5, next: Node {val: 7, next: null}}}}}}
  