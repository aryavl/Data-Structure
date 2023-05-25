
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
//   insert(value){
//     const newNode = new Node(value);
//     if(!this.root){
//         this.root = newNode;
//         return this
//     }
//     let tree= this.root;
//     // traversal through the tree
//      while(tree){
//         if(value < tree.value){
//             if(!tree.left){
//                 tree.left= newNode;
//                 return this
//             }
//             tree= tree.left
//         }else{
//             if(!tree.right){
//                 tree.right = newNode;
//                 return this
//             }
//             tree = tree.right
//         }
//      }
//      return this
//   }

// ----> Using recursion <------
    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
            if(!root.right){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }
//   search(value){
//     if(!this.root){
//         return false
//     }
    
//     let tree= this.root
//     while(tree){
//         if(value < tree.value){
//             tree = tree.left
//         }else if(value > tree.value){
//             tree = tree.right
//         }else if(value === tree.value){
//             return true;
//         }
//     }
//     return false
//     }
// ----------> Using recursion <-------------

search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root){
    if(root){
      console.log(root.value);
    }
    if(root.left){

      this.preOrder(root.left)
    }
    if(root.right){
        this.preOrder(root.right)
    }
  }
  // preOrder(root){
  //   if(root){
  //     console.log(root.value);
  //     this.preOrder(root.left)
  //     this.preOrder(root.right)
  //   }

  // }
  inOrder(root){
    if(root.left){

      this.inOrder(root.left)
    }
    if(root){
        console.log(root.value);
      }
      if(root.right){

        this.inOrder(root.right)
      }
  }
  postOrder(root){
    if(root.left){

      this.postOrder(root.left)
    }
    if(root.right){

      this.postOrder(root.right)
    }
    if(root){
        console.log(root.value);
    }
  }
  breadthFirstSearch(){
    let currentNode = this.root
    let queue = []
    let result=[]
    queue.push(currentNode)
    while(queue.length){
        currentNode = queue.shift()
        result.push(currentNode.value);
        if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right)
    }
    return result
  }
  min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
  }
max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}
maxHeight(node){
  if (node === null) {
    return 0;
  } else {
    const leftHeight = this.maxHeight(node.left);
    const rightHeight = this.maxHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
remove(value){
    if(!this.root){
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a Match!
        //Option 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        }else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        }else{
          //Find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }

        }
      }
      return true;
    }
  }
}
delete(value){
  this.root= this.deleteNode(this.root,value)
}
deleteNode(root,value){
  // base condition
  if(!root){
    return root;
  }
  if(value < root.value){
    root.left = this.deleteNode(root.left,value)
  }else if(value > root.value){
    root.right = this.deleteNode(root.right,value)
  }else{
    // no child
    if(!root.left && !root.right){
      return null
    }
    // only one child
    if(!root.left){
      return root.right
    }else if(!root.right){
      return root.left
    }
    // node has two child nodes
    // we copy the in order successor of the node and we delete the the inorder successor
    // inorder successor of a node is the minimum value of the right subtree
    root.value = this.min(root.right);
    root.right = this.deleteNode(root.right,root.value)
  }
  return root
}
isFulltree(node){
  if(node ===null){
    return true;
  }
  if(node.left === null && node.right === null){
    return true;
  }
  if(node.left !==null && node.right !==null){
    return (this.isFulltree(node.left) && this.isFulltree(node.right))
  }
  return false
}
 isCompleteTree(root) {
  if (root === null) {
    return true;
  }

  let queue = [];
  queue.push(root);
  let foundNullChild = false;

  while (queue.length) {
    let currentNode = queue.shift();

    if (foundNullChild && (currentNode.left || currentNode.right)) {
      // If a node has a child after finding a null child, it's not a complete tree
      return false;
    }

    if (currentNode.left === null || currentNode.right === null) {
      foundNullChild = true;
    }

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }

  return true;
}

// isCompleteTree(root){
//   if (root === null) {
//     return true;
//   }

//   let queue = [];
//   queue.push(root);
//   let foundNullChild = false;

//   while (queue.length) {
//     let currentNode = queue.shift();



//     if (currentNode.left === null && currentNode.right !== null) {
//       // If a node has a right child but not a left child, it's not a complete tree
//       return false;
//     }

//     if (currentNode.left !== null) {
//       queue.push(currentNode.left);
//     }

//     if (currentNode.right !== null) {
//       queue.push(currentNode.right);
//     }

   
//   }

//   return true;
// }

findSmallestValue(){
  if(!this.root) return null;
  return this.findSmallestRecursion(this.root);
}
findSmallestRecursion(node){
if(!node.left) return node.value
return this.findSmallestRecursion(node.left)
}

findLargestValue(){
  if(!this.root) return null;
  return this.findLargestRecursion(this.root);
}
findLargestRecursion(node){
  if(!node.right) return node.value;
  return this.findLargestRecursion(node.right)
}
findClosestValue(target) {
    if (this.root === null) {
      return null;
    }
    let closestValue = this.root.value;
    let minDiff = Math.abs(target - closestValue);

    let currentNode = this.root;
    while (currentNode !== null) {
      const diff = Math.abs(target - currentNode.value);
      if (diff < minDiff) {
        minDiff = diff;
        closestValue = currentNode.value;
      }

      if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        // Found an exact match, no need to search further
        break;
      }
    }

    return closestValue;
  }

  findDepth(root){
    if(root === null){
      return 0;
    }
    const leftDepth = this.findDepth(root.left)
    const rightDepth = this.findDepth(root.right)

    return Math.max(leftDepth,rightDepth)+1
  }
  isPerfectTree(root){
    if(root === null){
      return true;
    }
    const leftDepth = this.fin
  }
  }
  
  
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(8);
  bst.insert(2);
  bst.insert(1);
  bst.insert(4);
  bst.insert(12);
  bst.insert(6);
  bst.insert(18);
    bst.insert(11);
 
  // bst.delete(12)
//   bst.remove(7)
//  console.log(bst);
//  console.log( bst.search(bst.root,1));
//  const target = 9;
// const closestValue = bst.findClosestValue(target);
// console.log(`Closest value to ${target} is ${closestValue}`);
  //  bst.postOrder(bst.root)
  //  console.log("in");
  //  bst.inOrder(bst.root)
  //  console.log("PRE");
  //  bst.preOrder(bst.root)
  //  console.log(bst.findSmallestValue());
  //  console.log(bst.findLargestValue());
   console.log(bst.isFulltree(bst.root));
   console.log(bst.isCompleteTree(bst.root));
   console.log(bst.findDepth(bst.root));
   

    //  console.log(bst.breadthFirstSearch());
//   console.log(bst.min(bst.root));
//   console.log(bst.max(bst.root));
// console.log(bst.maxHeight(bst.root));