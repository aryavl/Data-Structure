// Binary Search Tree Node
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Binary Search Tree
  class BST {
    constructor() {
      this.root = null;
    }
  
    // Insert a new node into the BST
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      let currentNode = this.root;
      while (true) {
        if (value === currentNode.value) return this;
  
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  
    // Check if a number is prime
    isPrime(n) {
      if (n <= 1) return false;
      if (n <= 3) return true;
      if (n % 2 === 0 || n % 3 === 0) return false;
  
      let i = 5;
      while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
      }
  
      return true;
    }
  
    // Find prime numbers in the BST
    findPrimeNumbers() {
      const primes = [];
      this.traverseInOrder(this.root, (node) => {
        if (this.isPrime(node.value)) {
          primes.push(node.value);
        }
      });
      return primes;
    }
  
    // In-order traversal of the BST
    traverseInOrder(node, visit) {
      if (node) {
        this.traverseInOrder(node.left, visit);
        visit(node);
        this.traverseInOrder(node.right, visit);
      }
    }
  }
  
  // Usage example
  const bst = new BST();
  bst.insert(5);
  bst.insert(12);
  bst.insert(8);
  bst.insert(3);
  bst.insert(7);
  bst.insert(15);
  bst.insert(4);
  
  const primeNumbers = bst.findPrimeNumbers();
  console.log(primeNumbers);
  