// // TrieNode class
// class TrieNode {
//     constructor() {
//       this.children = new Map(); // Map of character to TrieNode
//       this.isEndOfWord = false; // Flag to indicate end of a word
//     }
//   }
  
//   // Trie class
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
  
//     // Insert a word into the trie
//     insert(word) {
//       let node = this.root;
//       for (let i = 0; i < word.length; i++) {
//         const char = word[i];
//         if (!node.children.has(char)) {
//           node.children.set(char, new TrieNode());
//         }
//         node = node.children.get(char);
//       }
//       node.isEndOfWord = true;
//     }
  
//     // Search for a word in the trie
//     search(word) {
//       let node = this.root;
//       for (let i = 0; i < word.length; i++) {
//         const char = word[i];
//         if (!node.children.has(char)) {
//           return false;
//         }
//         node = node.children.get(char);
//       }
//       return node.isEndOfWord;
//     }
  
//     // Check if a given prefix exists in the trie
//     startsWith(prefix) {
//       let node = this.root;
//       for (let i = 0; i < prefix.length; i++) {
//         const char = prefix[i];
//         if (!node.children.has(char)) {
//           return false;
//         }
//         node = node.children.get(char);
//       }
//       return true;
//     }
//   }
  
//   // Usage example
//   const trie = new Trie();
//   trie.insert("apple");
//   trie.insert("application");
//   trie.insert("apply");
  
//   console.log(trie.search("apple")); // true
//   console.log(trie.search("app")); // false
//   console.log(trie.startsWith("app")); // true
  
class TrieNode{
  constructor(){
    this.children = new Map();
    this.isEndOfWord = false;
  }
}
class Trie{
  constructor(){
    this.root = new TrieNode();
  }
  insert(word){
    let current = this.root;
    for(let i=0; i<word.length; i++){
      const ch = word.charAt(i);
      if(!current.children.has(ch)){
        current.children.set(ch, new TrieNode())
      }
      current = current.children.get(ch);
    }
    current.isEndOfWord= true;
  }
  search(word){
    let current = this.root;
    for(let i =0; i<word.length; i++){
      const ch = word.charAt(i);
      if(!current.children.has(ch)){
        return false;
      }
      current = current.children.get(ch);
    }
    return current.isEndOfWord
  }
  checkPrefix(prefix){
    let current = this.root;
    for(let i=0; i<prefix.length;i++){
      let ch = prefix.charAt(i);
      if(!current.children.has(ch)){
        return false;
      }
      current = current.children.get(ch)
    }
    return true
  }
  findPrefixes(prefix){
    let current = this.root;
    let prefixes=[]
    for(let i =0; i<prefix.length;i++){
      const ch = prefix.charAt(i);
      if(!current.children.has(ch)){
        return prefixes
      }
      current = current.children.get(ch)
    }
    this.collectPrefixes(prefix,current,prefixes)
    return prefixes
  }
  collectPrefixes(prefix,current,prefixes){
    if(current.isEndOfWord){
      prefixes.push(prefix)
    }
    for(const [ch,childNode] of current.children){
      const nextPrefix = prefix + ch;
      this.collectPrefixes(nextPrefix,childNode,prefixes)
    }
  }
  dfsTraversal(node=this.root,prefix=""){
    if(node.isEndOfWord){
      console.log(prefix); 
    }
    for(let [ch,childNode] of node.children){
      this.dfsTraversal(childNode,prefix+ch)
    }
  }
  // not working
  //  getAllWords() {
  //   const words = [];
  //   const currentWord = '';
  //   this._collectWords(this.root, currentWord, words);
  //   return words;
  // }

  // _collectWords(node, currentWord, words) {
  //   if (node.isEndOfWordWord) {
  //     words.push(currentWord);
  //   }

  //   for (const [char, childNode] of node.children) {
  //     const nextWord = currentWord + char;
  //     this._collectWords(childNode, nextWord, words);
  //   }
  // }
}
const trie= new Trie();
trie.insert("hello")
trie.insert("world")
trie.insert("hi")
trie.insert("higirl")

console.log(trie.search("hello"));
console.log(trie.search("lex"));
console.log(trie.checkPrefix("h"))
// console.log(trie.findPrefixes("h"));
trie.dfsTraversal();
console.log(trie.getAllWords());

// find the largest prefix in a trie