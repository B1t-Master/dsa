class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.#buildTree(array, 0, array.length - 1);
  }

  #buildTree(array, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new Node(array[mid]);
    root.left = this.#buildTree(array, start, mid - 1);
    root.right = this.#buildTree(array, mid + 1, end);
    return root;
  }
  insert(value) {
    let current = this.root;
    while (current) {
      if (value > current.data && current.right) {
        current = current.right;
      } else if (value < current.data && current.left) {
        current = current.left;
      } else break;
    }
    let node = new Node(value);
    if (current.data < value) {
      return (current.right = node);
    }
    return (current.left = node);
  }

  delete(value) {
    let current = this.root;
    let parent = null;
    let turnRight;
    while (current) {
      if (value > current.data && current.right) {
        parent = current;
        turnRight = true;
        current = current.right;
      } else if (value < current.data && current.left) {
        parent = current;
        turnRight = false;
        current = current.left;
      } else break;
    }

    //no children nodes
    if (!current.right && !current.left && turnRight)
      return (parent.right = null);
    if (!current.right && !current.left && !turnRight)
      return (parent.left = null);

    //1 child node
    if (!current.right && current.left && turnRight)
      return (parent.right = current.left);
    if (current.right && !current.left && turnRight)
      return (parent.right = current.right);
    if (!current.right && current.left && !turnRight)
      return (parent.left = current.left);
    if (current.right && !current.left && !turnRight)
      return (parent.left = current.right);

    //2 Children node
    let successor = this.inOrderSuccesor(current.right);

    current.data = successor.data;
    if (successor.right) {
      return (current.right = successor.right);
    } else return (current.right = null);
  }

  inOrderSuccesor(current = current.right) {
    if (!current) return;
    if (!current.left) return current;
    let successor = this.inOrderSuccesor(current.left);
    return successor;
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.data) return current;
      if (value < current.data) current = current.left;
      else current = current.right;
    }
    return null;
  }

  levelOrderTraversal(callback, queue = [this.root]) {
    //need more practice on recursion
    if (typeof callback !== "function") {
      throw new Error("Not a function!");
    }

    const node = queue.shift();
    if (!node) {
      return;
    }
    callback(node);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    this.levelOrderTraversal(callback, queue);

    //  while (queue>0) {
    //   const node = queue.shift();

    //   callback(node);

    //   if (node.left) {
    //     queue.push(node.left);
    //   }
    //   if (node.right) {
    //     queue.push(node.right);
    //   }
    // }
  }

  preOrderTraversal(callback, root = this.root) {
    if (typeof callback !== "function") {
      throw new Error("Not a function!");
    }
    if (!root) return;
    callback(root);
    this.preOrderTraversal(callback, root.left);
    this.preOrderTraversal(callback, root.right);
  }
  inOrderTraversal(callback, root = this.root) {
    if (typeof callback !== "function") {
      throw new Error("Not a function!");
    }
    if (!root) return;

    this.preOrderTraversal(callback, root.left);
    callback(root);
    this.preOrderTraversal(callback, root.right);
  }
  postOrderTraversal(callback, root = this.root) {
    if (typeof callback !== "function") {
      throw new Error("Not a function!");
    }
    if (!root) return;

    this.preOrderTraversal(callback, root.left);
    this.preOrderTraversal(callback, root.right);
    callback(root);
  }

  calcNode(current) {
    // let node = this.root;
    // console.log(node);
    if (!current) return -1;

    let leftSubTree = this.calcNode(current.left);
    let rightSubTree = this.calcNode(current.right);
    return 1 + Math.max(rightSubTree, leftSubTree);
  }

  height(value) {
    let current = this.find(value);
    if (!current) return null;
    return this.calcNode(current);
  }

  //old height method cant return null on items that dont exist in tree

  // traverseToNode(value, current) {
  //   // let node = this.root;
  //   // console.log(node);
  //   while (current) {
  //     if (value === current.data) return current;
  //     if (value < current.data) current = current.left;
  //     else current = current.right;
  //   }
  //   return null;
  // }

  // height(value, current = this.traverseToNode(value, this.root)) {
  //   current = this.traverseToNode(value, current);
  //   if (!current) return -1;

  //   let leftSubTree = this.height(current.left?.data, current.left);
  //   let rightSubTree = this.height(current.right?.data, current.right);
  //   return 1 + Math.max(rightSubTree, leftSubTree)
  // }

  depth(value) {
    let depth = 0;
    let current = this.root;
    if (value === this.root.data) return 0;
    while (current) {
      if (value > current.data && current.right) {
        depth++;
        current = current.right;
      } else if (value < current.data && current.left) {
        depth++;
        current = current.left;
      } else break;
      if (current.data === value) return depth;
      return null;
    }
  }
  getBalanceFactor(current) {
    if (!current) return -1;

    let leftSubTree = this.calcNode(current.left);
    let rightSubTree = this.calcNode(current.right);
    if (Math.abs(leftSubTree - rightSubTree) > 1) return "Not balnced";
    1 + Math.max(rightSubTree, leftSubTree);
    return "Is balanced";
  }
  isBalanced() {
    let current = this.root;
    if (!current) return null;
    return this.getBalanceFactor(current);
  }
  rebalance() {
    // console.log(this.isBalanced());
    if (this.isBalanced() === "Is Balanced") return;
    let arr = [];
    this.inOrderTraversal((node) => arr.push(node.data));
    return (this.root = this.#buildTree(arr, 0, arr.length - 1));
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function createRandomArray() {
  let arr = [];
  let i = 1;
  while (arr.length < 100) {
    arr.push(Math.floor(Math.random() * 100));
    i++;
    arr = [...new Set(arr)].sort((a, b) => a - b);
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 5, 9, 14, 23, 27];
let bst = new Tree(arr);
let bst2 = new Tree(arr2);

// console.log(test);
test = createRandomArray();
test = new Tree(test);

// bst2.insert();
// prettyPrint(bst2.root);

// console.log(bst2.height(9));
test.insert(101);
test.insert(103);
console.log(test.rebalance());
prettyPrint(test.root);

// prettyPrint(test.root);
// console.log(test.isBalanced());
