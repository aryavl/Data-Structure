class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(childNode) {
      this.children.push(childNode);
    }
  }
  
  // Function to insert an element into the tree
  function insertIntoTree(root, element, parentValue) {
    if (root.value === parentValue) {
      const newNode = new TreeNode(element);
      root.addChild(newNode);
      return true;
    } else {
      for (const child of root.children) {
        if (insertIntoTree(child, element, parentValue)) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  // Create the initial tree
  const root = new TreeNode("A");
  const nodeB = new TreeNode("B");
  const nodeC = new TreeNode("C");
  const nodeD = new TreeNode("D");
  const nodeE = new TreeNode("E");
  const nodeF = new TreeNode("F");
  
  root.addChild(nodeB);
  root.addChild(nodeC);
  nodeB.addChild(nodeD);
  nodeB.addChild(nodeE);
  nodeC.addChild(nodeF);
  
  // Insert a new element
  insertIntoTree(root, "G", "D");
  
  // Usage example: printing the tree structure
  function printTree(node, level = 0) {
    let indentation = "  ".repeat(level);
    console.log(indentation + "- " + node.value);
  
    for (const child of node.children) {
      printTree(child, level + 1);
    }
  }
  
  printTree(root);
// class TreeNode{
//   constructor(value){
//     this.value = value;
//     this.descendants= [];
//   }
//   display(){
//     console.log(this.descendants);
//   }
// }

// const arya = new TreeNode("Arya");
// const dachu = new TreeNode("Dachu");
// const kukku = new TreeNode("Kukku");
// const veena = new TreeNode("Veena");
// const soosan = new TreeNode("Soosan");

// kukku.descendants.push(arya,dachu)
// arya.descendants.push(veena,soosan)
// kukku.display()

class BinaryTree{
  constructor(){
    this.tree=[];
  }
  insert(data){
    this.tree.push(data);
  }
  getLeftChild(parentIndex){
    const letfChildIndex = (2 * parentIndex)+1;
    return this.tree[letfChildIndex]
  }
  getRightChild(parentIndex){
    const rightChildIndex = (2 * parentIndex)+2;
    return this.tree[rightChildIndex]
  }
  getParent(childIndex){
    const parentIndex = Math.floor((childIndex-1)/2)
    return this.tree[parentIndex]
  }
}

const binaryTree = new BinaryTree();

binaryTree.insert(5)
binaryTree.insert(3)
binaryTree.insert(8)
binaryTree.insert(2)
binaryTree.insert(4)

console.log(binaryTree.tree);

const leftChild = binaryTree.getLeftChild(0)
console.log("leftChild", leftChild);
const rightChild = binaryTree.getRightChild(0)
console.log("rightChild",rightChild);
const parent = binaryTree.getParent(2)
console.log("parent",parent);



  