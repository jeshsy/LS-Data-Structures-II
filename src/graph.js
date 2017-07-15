/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(newNode, toNode) {
    const node = {
      value: newNode,
      edge: []
    };
    this.graph[node.value] = node;
    if (arguments.length === 2) {
      node.edge.push(toNode.value);
      toNode.edge.push(node.value);
    }
  }
  contains(value) {
  return this.graph.hasOwnProperty(value);
  }
  removeNode(value) {
    delete this.graph[value];
    const keys = Object.keys(this.graph);
    for (let i = 0; i < keys.length; i++) {
      if(this.graph[keys[i]].edge.includes(value)) {
        this.graph[keys[i]].edge.splice(indexOf(value), 1);
      }
    }
  }
  addEdge(fromNode, toNode) {
    this.graph.fromNode.edge.push(toNode.value);
    this.graph.toNode.edge.push(fromNode.value);
  }
  getEdge(fromNode, toNode) {
    return this.graph.fromNode.edge.includes(toNode);
  }
  removeEdge(fromNode, toNode) {

  }

}

module.exports = Graph;
