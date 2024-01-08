class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;
  //TODO: Define height and depth
  buildTree(myData: T[], start: number = 0, end: number = myData.length - 1) {
    if (start > end) return null;
    //Array sortieren
    //myData.sort((a, b) => a - b);
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(myData[mid]);
    node.left = this.buildTree(myData, start, mid - 1);
    node.right = this.buildTree(myData, mid + 1, end);
    return (this.root = node);
  }

  insertIterative(val: T) {
    const newNode = new TreeNode<T>(val);
    if (!this.root) return (this.root = newNode);
    let current = this.root;
    while (true) {
      if (val === current.value) return;
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

  insertRec(val: T) {
    const check = (node: TreeNode<T>) => {
      if (node.value === val) return;
      if (node.value > val) {
        check((node.left = node.left ?? new TreeNode<T>(val)));
      }
      if (node.value < val) {
        check((node.right = node.right ?? new TreeNode<T>(val)));
      }
    };
    check((this.root = this.root ?? new TreeNode<T>(val)));
  }

  //TODO find method

  breadthFirst() {
    let node = this.root;
    const queue = [];
    const visited: T[] = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift() as TreeNode<T>;
      visited.push(node?.value);
      if (node?.left) queue.push(node?.left);
      if (node?.right) queue.push(node?.right);
    }

    return visited;
  }

  preOrder() {
    const visited: T[] = [];
    const search: any = (node: TreeNode<T>) => {
      visited.push(node.value);
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    };
    search(this.root as TreeNode<T>);
    return visited;
  }

  //TODO InOrder
  //TODO PostOrder
  //TODO Height
}

function prettyPrint(node: TreeNode<number>, prefix = "", isLeft = true) {
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
prettyPrint(tree.root as TreeNode<number>);
console.log(tree);
