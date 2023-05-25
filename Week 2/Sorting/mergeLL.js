class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    mergeSort(head) {
      if (!head || !head.next) {
        return head;
      }
      const middle = this.getMiddle(head);
      const nextToMiddle = middle.next;
      middle.next = null;
      const left = this.mergeSort(head);
      const right = this.mergeSort(nextToMiddle);
      const sortedList = this.merge(left, right);
      return sortedList;
    }
  
    getMiddle(head) {
      if (!head) {
        return head;
      }
      let slow = head;
      let fast = head.next;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }
  
    merge(left, right) {
      const dummy = new Node(null);
      let current = dummy;
      while (left && right) {
        if (left.data <= right.data) {
          current.next = left;
          left = left.next;
        } else {
          current.next = right;
          right = right.next;
        }
        current = current.next;
      }
      current.next = left || right;
      return dummy.next;
    }
  }
  const list = new LinkedList();
  list.append(5);
  list.append(2);
  list.append(7);
  list.append(1);
  list.append(9);
  list.append(3);
  const sortedList = list.mergeSort(list.head);
  list.head = sortedList;
  list.printList(); // prints the sorted linked list
    