"use strict";
class Knight {
    constructor() {
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
    move(start, end) {
        let newX;
        let newY;
        let currentPos;
        let result = [];
        const queue = [
            {
                current: [...start],
                path: [...start],
            },
        ];
        //Breadth first
        while (queue.length > 0) {
            currentPos = queue.shift();
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
            if ((currentPos === null || currentPos === void 0 ? void 0 : currentPos.current[0]) === end[0] &&
                currentPos.current[1] === end[1]) {
                //Abbruch
            }
        }
    }
    checkIfInField(x, y) {
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Gameboard {
    constructor() {
        this.adjacencyList = new Map();
    }
}
const knight = new Knight();
const gameboard = new Gameboard();
knight.move([1, 3], [1, 1]);
//# sourceMappingURL=KnightTravails.js.map