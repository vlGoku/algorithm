type Queue = { current: number[]; path: number[] };

class Knight {
  private possibleMoves: number[][];
  private queue: {possibleMove: number[]; currentPath: number[]}[] = []
  private visited = new Set();
  private path: number [] | number[][] = []

  constructor(){
  this.possibleMoves = [
    [2, 1],
    [2, -1],
    [-2, -1],
    [-2, 1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
}

  checkIfInField(pos: number[]) {
    return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
  }

  //BFS
  moves(start: number[], end: number[]){
    this.visited.add(start);
    this.queue.push({ possibleMove: start, currentPath: start});
    let currentData: { possibleMove: number[]; currentPath: number[]};
    let next: number[];
    while(this.queue.length){
      currentData = this.queue.shift()!;
      if(currentData.possibleMove[0] === end[0] && currentData.possibleMove[1] === end[1]){
        this.path = currentData.currentPath;
        break;
      }

      this.possibleMoves.forEach(move => {
        next = [currentData.possibleMove[0]! + move[0], currentData.possibleMove[1] + move[1],];
        if(this.checkIfInField(next)){
          this.visited.add(next);
          this.queue.push({
            possibleMove: next,
            currentPath: currentData.currentPath.concat(next),
          })
        }
      });
    }
  }
/*   move(start: number[], end: number[]) {
    let newX: number;
    let newY: number;
    let currentPos: Queue;
    let result: number[][] = [];
    const queue: Queue[] = [
      {
        current: [...start],
        path: [...start],
      },
    ];

    //Breadth first
    while (queue.length > 0) {
      currentPos = queue.shift()!;
      this.possibleMoves.forEach((move) => {
        newX = currentPos.current[0] + move[0];
        newY = currentPos.current[1] + move[1];
        if (this.checkIfInField(newX, newY)) {
          queue.push({
            current: [newX, newY],
            path: [...currentPos.path, newX, newY],
          });
        }
      });
      if (
        currentPos?.current[0] === end[0] &&
        currentPos.current[1] === end[1]
      ) {
        //Abbruch
      }
    }
  } */
  }

class Gameboard<T> {
  adjacencyList = new Map();
}

const knight = new Knight();
const gameboard = new Gameboard<number>();
