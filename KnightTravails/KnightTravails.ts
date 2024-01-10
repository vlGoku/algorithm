type Queue = { current: number[]; path: number[] };

class Knight {
  possibleMoves: number[][] = [
    [2, 1],
    [2, -1],
    [-2, -1],
    [-2, 1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  move(start: number[], end: number[]) {
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
  }

  checkIfInField(x: number, y: number): boolean {
    if (x >= 0 && x < 8 && y >= 0 && y < 8) {
      return true;
    } else {
      return false;
    }
  }
}

class Gameboard<T> {
  adjacencyList = new Map();
}

const knight = new Knight();
const gameboard = new Gameboard<number>();
knight.move([1, 3], [1, 1]);
