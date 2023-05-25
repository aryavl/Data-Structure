class Graph {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.matrix = [];
  
      for (let i = 0; i < numVertices; i++) {
        this.matrix[i] = new Array(numVertices).fill(0);
      }
    }
  
    addEdge(source, destination) {
      if (source >= 0 && source < this.numVertices && destination >= 0 && destination < this.numVertices) {
        this.matrix[source][destination] = 1;
        this.matrix[destination][source] = 1;
      }
    }
  
    removeEdge(source, destination) {
      if (source >= 0 && source < this.numVertices && destination >= 0 && destination < this.numVertices) {
        this.matrix[source][destination] = 0;
        this.matrix[destination][source] = 0;
      }
    }
  findEdgeIndexes(){
    let edgeIndex = []
    for(let i=0; i< this.numVertices;i++){
        for(let j=0; j<this.numVertices;j++){
            if(this.matrix[i][j]!==0){
                edgeIndex.push([i,j])
            }
        }
    }
    return edgeIndex
  }
  findVertex(){
    let vertex=[]
    for(let i=0; i<this.numVertices;i++){
        vertex.push(i)
    }
    return vertex
  }
    printGraph() {
      for (let i = 0; i < this.numVertices; i++) {
        let row = "";
        for (let j = 0; j < this.numVertices; j++) {
          row += this.matrix[i][j] + " ";
        }
        console.log(row);
      }
    }
  }
  
  // Example usage
  const graph = new Graph(5);
  graph.addEdge(0, 1);
  graph.addEdge(0, 4);
  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(1, 4);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  
 // graph.printGraph();
 console.log( graph.findEdgeIndexes());
 console.log( graph.findVertex());
  