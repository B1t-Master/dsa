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

  delete(value) {}
  find() {}

  levelOrderTraversal(callback, queue = [this.root]) {
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
  if (node.right !== null) {
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
bst.insert(7);
bst.insert(0.5);

// bst.buildTree(arr);
prettyPrint(bst.root);
// prettyPrint(bst2.root);
bst.levelOrderTraversal((node) => console.log(node.data));
