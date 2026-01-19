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

  inOrderSuccesor = function (current = current.right) {
    if (!current) return;
    if (!current.left) return current;
    let successor = this.inOrderSuccesor(current.left);
    return successor;
  };

  find() {}

  levelOrderTraversal(callback, queue = [this.root]) {
    //need more practice on recursion
    if (typeof callback !== "function") {
      throw new Error("Parameter should not be empty!");
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

  preOrderTraversal() {}
  inOrderTraversal() {}
  postOrderTraversal() {}
  rebalance() {}
  depth() {}
  height() {}
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null || node.right !== undefined) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 5, 9, 14, 23, 27];
let bst = new Tree(arr);
let bst2 = new Tree(arr2);
// bst.insert(7);
bst.insert(0.5);
bst.delete(1);
// console.log(bst.inOrderSuccesor(bst.root.right));

// console.log(bst.root.right);

prettyPrint(bst.root);

// bst.buildTree(arr);
// prettyPrint(bst2.root);
// bst.levelOrderTraversal((node) => console.log(node.data));
