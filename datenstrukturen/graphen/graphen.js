"use strict";
/*const adjacencyList = new Map();
adjacencyList.set("A", ["B", "E"]);
adjacencyList.set("B", ["A", "C", "D"]);
adjacencyList.set("C", ["B", "D"]);
console.log(adjacencyList);*/
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1, vertex2) {
        var _a, _b;
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push(vertex2);
            (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        var _a, _b;
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.set(vertex1, (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.filter((a) => a !== vertex2));
            this.adjacencyList.set(vertex2, (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.filter((a) => a !== vertex1));
        }
    }
    removeVertex(vertex) {
        var _a, _b;
        while ((_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.length) {
            this.removeEdge(vertex, (_b = this.adjacencyList.get(vertex)) === null || _b === void 0 ? void 0 : _b.pop());
        }
        this.adjacencyList.delete(vertex);
    }
    depthFirst(startVertex) {
        var _a;
        //wenn iterativ
        const stack = [startVertex]; //push, pop
        const result = [];
        const visited = {};
        let currentVertex = null;
        visited[startVertex] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            (_a = this.adjacencyList.get(currentVertex)) === null || _a === void 0 ? void 0 : _a.forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    depthFirstRecursive(startVertex) {
        const result = [];
        const visited = {};
        const dfs = (vertex) => {
            var _a;
            if (!vertex)
                return null;
            visited[vertex] = true;
            result.push(vertex);
            (_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.forEach((neighbor) => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };
        dfs(startVertex);
        return result;
    }
    breadthFirst(startVertex) {
        var _a;
        //push, shift
        const queue = [startVertex];
        const result = [];
        const visited = {};
        let currentVertex = null;
        visited[startVertex] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            (_a = this.adjacencyList.get(currentVertex)) === null || _a === void 0 ? void 0 : _a.forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
    breadthFirstRecursive(startVertex) {
        const queue = [startVertex];
        const visited = [];
        let currentVertex = null;
        const bfs = () => {
            var _a, _b, _c;
            currentVertex = queue.shift();
            visited.push(currentVertex);
            (_c = (_b = (_a = this.adjacencyList
                .get(currentVertex)) === null || _a === void 0 ? void 0 : _a.slice()) === null || _b === void 0 ? void 0 : _b.reverse()) === null || _c === void 0 ? void 0 : _c.forEach((node) => {
                if (!visited.includes(node) && !queue.includes(node)) {
                    queue.push(node);
                }
            });
            if (queue.length)
                bfs();
        };
        bfs();
        return visited;
    }
}
const graph = new Graph();
/* graph.addVertex("Berlin");
graph.addVertex("Wien");
graph.addVertex("London");
graph.addVertex("Barcelona");
graph.addVertex("Madrid");
graph.addVertex("Paris");
graph.addVertex("Rom");
graph.addEdge("Berlin", "London");
graph.addEdge("Berlin", "Barcelona");
graph.addEdge("Berlin", "Madrid");
graph.addEdge("Berlin", "Paris");
graph.addEdge("Berlin", "Rom");
graph.depthFirst("Berlin"); */
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("E", "D");
graph.addEdge("E", "F");
graph.addEdge("F", "D");
console.log(graph.adjacencyList);
console.log(graph.breadthFirst("A"));
//# sourceMappingURL=graphen.js.map