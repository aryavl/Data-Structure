// Define the Node class for linked list

// class Node {
//     constructor(key, value) {
//       this.key = key;
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   // Define the HashTable class
//   class HashTable {
//     constructor(size) {
//       this.size = size;
//       this.buckets = new Array(size);
//       for (let i = 0; i < size; i++) {
//         this.buckets[i] = null;
//       }
//     }
//     display(){
//         this.buckets.forEach(item=>console.log(item))
//     }
  
//     // Define the hash function to generate an index
//     hash(key) {
//       let sum = 0;
//       for (let i = 0; i < key.length; i++) {
//         sum += key.charCodeAt(i);
//       }
//       return sum % this.size;
//     }
  
//     // Define the set method to insert a key-value pair into the hash table
//     set(key, value) {
//       let index = this.hash(key);
//       if (this.buckets[index] === null) {
//         this.buckets[index] = new Node(key, value);
//       } else {
//         let currentNode = this.buckets[index];
//         while (currentNode.next !== null) {
//           if (currentNode.key === key) {
//             currentNode.value = value;
//             return;
//           }
//           currentNode = currentNode.next;
//         }
//         if (currentNode.key === key) {
//           currentNode.value = value;
//         } else {
//           currentNode.next = new Node(key, value);
//         }
//       }
//     }
  
//     // Define the get method to retrieve a value from the hash table based on a key
//     get(key) {
//       let index = this.hash(key);
//       let currentNode = this.buckets[index];
//       while (currentNode !== null) {
//         if (currentNode.key === key) {
//           return currentNode.value;
//         }
//         currentNode = currentNode.next;
//       }
//       return null;
//     }
  
//     // Define the remove method to delete a key-value pair from the hash table
//     remove(key) {
//       let index = this.hash(key);
//       let currentNode = this.buckets[index];
//       let previousNode = null;
//       while (currentNode !== null) {
//         if (currentNode.key === key) {
//           if (previousNode === null) {
//             this.buckets[index] = currentNode.next;
//           } else {
//             previousNode.next = currentNode.next;
//           }
//           return true;
//         }
//         previousNode = currentNode;
//         currentNode = currentNode.next;
//       }
//       return false;
//     }
//   }
  
//   // Example usage
//   const myHashTable = new HashTable(10);
//   myHashTable.set('apple', 2.99);
//   myHashTable.set('banana', 1.99);
//   myHashTable.set('cherry', 3.99);
//   myHashTable.set('date', 4.99);
//   myHashTable.set('apple', 1.99);
// //   console.log(myHashTable.get('apple')); // Output: 1.99
//   myHashTable.remove('banana');
// //   console.log(myHashTable.get('banana')); // Output: null
//   myHashTable.display()

// Define the Node class for linked list
class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  // Define the HashTable class
  class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size);
      for (let i = 0; i < size; i++) {
        this.buckets[i] = null;
      }
    }
  
    // Define the hash function to generate an index
    hash(key) {
      let sum = 0;
      for (let i = 0; i < key.length; i++) {
        sum += key.charCodeAt(i);
      }
      return sum % this.size;
    
    // const squared = key * key;
    // const str = squared.toString();
    // const mid = Math.floor(str.length / 2);
    // const hash = parseInt(str.substr(mid, this.size));
    // return hash;
    }
        display(){
        this.buckets.forEach(item=>console.log(item))

        }
  
    // Define the set method to insert a key-value pair into the hash table
    // complexity of O(1) on average
    // When inserting a key-value pair into a hash table, the hash function is applied to the key to determine the index (bucket) where the value should be stored. If there are no collisions, meaning no other key-value pairs already occupy the same bucket, the insertion can be done in constant time. The value is simply placed in the corresponding bucket.
    // If collison occurs complexity becomes O(n)
    set(key, value) {
      let index = this.hash(key);
      if (this.buckets[index] === null) {
        this.buckets[index] = new Node(key, [value]);
      } else {
        let currentNode = this.buckets[index];
        while (currentNode !== null) {
          if (currentNode.key === key) {
            currentNode.value.push(value);
            return;
          }
        //   linear probing
          if (currentNode.next === null) {
            currentNode.next = new Node(key, [value]);
            return;
          }
          currentNode = currentNode.next;
        }
      }
    }
  
    // Define the get method to retrieve a value from the hash table based on a key
    get(key) {
      let index = this.hash(key);
      let currentNode = this.buckets[index];
      while (currentNode !== null) {
        if (currentNode.key === key) {
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
      return null;
    }
  

    
    // Define the remove method to delete a key-value pair from the hash table
    remove(key) {
      let index = this.hash(key);
      let currentNode = this.buckets[index];
      let previousNode = null;
      while (currentNode !== null) {
        if (currentNode.key === key) {
          if (previousNode === null) {
            this.buckets[index] = currentNode.next;
          } else {
            previousNode.next = currentNode.next;
          }
          return true;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      return false;
    }
  }
  
  // Example usage
  const myHashTable = new HashTable(10);
  myHashTable.set('apple', 2.99);
  myHashTable.set('appel', 4);
  myHashTable.set('ppael', 4);
  myHashTable.set('banana', 1.99);
  myHashTable.set('cherry', 3.99);
  myHashTable.set('apple', 1.99);
  myHashTable.set('banana', 0.99);
  // console.log(myHashTable.remove('appel')); 
  console.log(myHashTable.get('banana')); // Output: [1.99, 0.99]
  myHashTable.display()
  