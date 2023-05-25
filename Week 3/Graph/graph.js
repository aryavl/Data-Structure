// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             // this.adjacencyList[vertex] = []
//             // for better performance use Set data structure
//             this.adjacencyList[vertex] = new Set();
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1);
//     }
//     // print 
//     display(){
//         for(let vertex in this.adjacencyList){
//             // since we use Set datastructure we use spread operator and convert this into an array
//             console.log(vertex + " -> "+ [...this.adjacencyList[vertex]]);
//         }
//     }

//     // remove an edge 
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     // remove an vertex
//     removeVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//           return;
//         }
//         for (let adjacentVertex of this.adjacencyList[vertex]) {
//           this.removeEdge(vertex, adjacentVertex);
//         }
//         delete this.adjacencyList[vertex];
//       }
//           // check edge between given vertex
//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2) && 
//             this.adjacencyList[vertex2].has(vertex1)

//         )
//     }
// }
// const graph = new Graph();
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('C')

// graph.addEdge('A','B')
// graph.addEdge('A','A')
// graph.addEdge('B','C')
// graph.addEdge('A','C')
// graph.addEdge('C','A')
// // graph.removeEdge('A','B')
// graph.removeVertex('A')
// graph.display()
// // console.log(graph.hasEdge('A','B'));

class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
//   findadjacentNodes
 findAdjacentNode(vertex){
    // loop through this.adjacencyList[vertex]
    // is this vertex in the connection
    // if yes, push the other vertex in pair, into adjacent array
    // if no, keep looping
   if(vertex in this.adjacencyList){
    return [...this.adjacencyList[vertex]]
   }else{
    return []
   }
 }
    removeEdge(vertex1, vertex2) { 
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
  
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        return;
      }
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  
    hasEdge(vertex1, vertex2) {
      return (
        this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)
      );
    }
    bfs(startVertex){
      const visited = new Set();
      const queue=[]
      const result = []

      visited.add(startVertex);
      queue.push(startVertex)

      while(queue.length){
        const currentVertex = queue.shift();
        const adjacentVerteces = this.adjacencyList.get(currentVertex);

        result.push(currentVertex);
        for(let i =0; i<adjacentVerteces.length; i++){
          const adjacentVertex = adjacentVerteces[i]
          if(!visited.has(adjacentVertex)){
            visited.add(adjacentVertex)
            queue.push(adjacentVertex)
          }
        }
      }
      return result
    
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
      }
    }}
  
  
  const graph = new Graph();
//  graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)

graph.addEdge(1,2)
graph.addEdge(2,3)
graph.addEdge(2,4)
// graph.addEdge('A','C')
// graph.addEdge('C','D')
  graph.display();
  // graph.removeEdge("A", "B");
  // console.log("After removing edge");
  // graph.display();
  // graph.removeVertex("A");
  // console.log("AFter removing vertex");
  // graph.display();
  // console.log("adjacent");
   console.log(graph.findAdjacentNode(2));
  // console.log(graph.bfs(1));
  
// // class Graph {
// //   constructor() {
// //     this.adjacencyList = new Map();
// //   }
  
// //   addVertex(vertex) {
// //     this.adjacencyList.set(vertex, []);
// //   }
  
// //   addEdge(vertex1, vertex2) {
// //     this.adjacencyList.get(vertex1).push(vertex2);
// //     this.adjacencyList.get(vertex2).push(vertex1);
// //   }
  
// //   dfs(start, visited = new Set()) {
// //     visited.add(start);
// //     console.log(start);
    
// //     for (const keyNode of this.adjacencyList.get(start)) {
// //       if (!visited.has(keyNode)) {
// //         this.dfs(keyNode, visited);
// //       }
// //     }
// //   }
  
// //   hasPathDFS(u, v) {
// //     const visited = new Set();
// //     this.dfs(u, visited);
    
// //     return visited.has(v);
// //   }
// // }

// // // Usage
// // const graph = new Graph();
// // graph.addVertex(1);
// // graph.addVertex(2);
// // graph.addVertex(3);
// // graph.addVertex(4);
// // graph.addEdge(1, 2);
// // graph.addEdge(2, 3);
// // graph.addEdge(2, 4);

// // console.log(graph.hasPathDFS(1, 3)); // Output: true
// // console.log(graph.hasPathDFS(1, 4)); // Output: true
// // console.log(graph.hasPathDFS(3, 4)); // Output: false

// class GraphWorkOut {
//   constructor(v) {
//     this.v = v;
//     this.graph = new Array(v);
//     for (let i = 0; i < v; i++) {
//       this.graph[i] = [];
//     }
//   }

//   addEdge(s, d) {
//     const e = { scr: s, dest: d };
//     this.graph[s].push(e);
//   }

//   BFS() {
//     const visited = new Array(this.v).fill(false);
//     const queue = [];
//     for (let i = 0; i < this.v; i++) {
//       if (!visited[i]) {
//         queue.push(i);
//         visited[i] = true;
//       }

//       while (queue.length > 0) {
//         const curr = queue.shift();
//         console.log(curr);

//         for (let j = 0; j < this.graph[curr].length; j++) {
//           const e = this.graph[curr][j];
//           if (!visited[e.dest]) {
//             queue.push(e.dest);
//             visited[e.dest] = true;
//           }
//         }
//       }
//     }
//   }

//   DFS() {
//     const visited = new Array(this.v).fill(false);
//     for (let i = 0; i < this.v; i++) {
//       if (!visited[i]) {
//         this.DFSHelper(i, visited);
//       }
//     }
//   }

//   DFSHelper(curr, visited) {
//     console.log(curr);
//     visited[curr] = true;
//     for (let i = 0; i < this.graph[curr].length; i++) {
//       const e = this.graph[curr][i];
//       if (!visited[e.dest]) {
//         this.DFSHelper(e.dest, visited);
//       }
//     }
//   }
// }

// const graph = new GraphWorkOut();


