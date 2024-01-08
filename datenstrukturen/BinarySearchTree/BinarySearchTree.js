"use strict";
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
        //TODO InOrder
        //TODO PostOrder
        //TODO Height
    }
    //TODO: Define height and depth
    buildTree(myData, start = 0, end = myData.length - 1) {
        if (start > end)
            return null;
        //Array sortieren
        //myData.sort((a, b) => a - b);
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode(myData[mid]);
        node.left = this.buildTree(myData, start, mid - 1);
        node.right = this.buildTree(myData, mid + 1, end);
        return (this.root = node);
    }
    insertIterative(val) {
        const newNode = new TreeNode(val);
        if (!this.root)
            return (this.root = newNode);
        let current = this.root;
        while (true) {
            if (val === current.value)
                return;
            if (val < current.value) {
                if (!current.left) {
                    return (current.left = newNode);
                }
                current = current.left;
            }
            if (val > current.value) {
                if (!current.right) {
                    return (current.right = newNode);
                }
                current = current.right;
            }
        }
    }
    insertRec(val) {
        var _a;
        const check = (node) => {
            var _a, _b;
            if (node.value === val)
                return;
            if (node.value > val) {
                check((node.left = (_a = node.left) !== null && _a !== void 0 ? _a : new TreeNode(val)));
            }
            if (node.value < val) {
                check((node.right = (_b = node.right) !== null && _b !== void 0 ? _b : new TreeNode(val)));
            }
        };
        check((this.root = (_a = this.root) !== null && _a !== void 0 ? _a : new TreeNode(val)));
    }
    //TODO find method
    breadthFirst() {
        let node = this.root;
        const queue = [];
        const visited = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            visited.push(node === null || node === void 0 ? void 0 : node.value);
            if (node === null || node === void 0 ? void 0 : node.left)
                queue.push(node === null || node === void 0 ? void 0 : node.left);
            if (node === null || node === void 0 ? void 0 : node.right)
                queue.push(node === null || node === void 0 ? void 0 : node.right);
        }
        return visited;
    }
    preOrder() {
        const visited = [];
        const search = (node) => {
            visited.push(node.value);
            if (node.left)
                search(node.left);
            if (node.right)
                search(node.right);
        };
        search(this.root);
        return visited;
    }
}
function prettyPrint(node, prefix = "", isLeft = true) {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "│   " : "    "}`, true);
    }
}
const data = [5, 10, 21, 87, 301, 350];
const tree = new BinarySearchTree();
tree.buildTree(data);
tree.insertIterative(5);
tree.insertIterative(10);
tree.insertIterative(2);
tree.insertIterative(9);
tree.insertIterative(1);
tree.insertIterative(3);
prettyPrint(tree.root);
console.log(tree);
//# sourceMappingURL=BinarySearchTree.js.map