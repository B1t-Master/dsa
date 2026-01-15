//to do : insertAt(value, index) that inserts a new node with the provided value at the given index.
//removeAt(index) that removes the node at the given index.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      return (current.next = newNode);
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let size = 1;
    if (this.head === null) {
      return (size = 0);
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
      ++size;
    }
    return size;
  }

  tail() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current.value;
  }

  at(index) {
    let i = list.size();
    if (i < index) {
      return "out of bounds";
    }
    let current = this.head;
    for (let j = 1; j < index; j++) {
      current = current.next;
    }
    return current.value;
  }

  pop() {
    let i = list.size() - 1;
    let current = this.head;
    let j = 1;
    while (j < i) {
      current = current.next;
      j++;
    }
    current.next = null;
  }

  contains(value) {
    let i = list.size();
    let current = this.head;
    let j = 1;
    while (j <= i) {
      if (current.value === value) {
        return true;
      }
      j++;
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let i = 1;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.head;

    while (current) {
      result += `${current.value}` + "->";
      current = current.next;
    }
    result += "null";
    return result;
  }
}

const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// list.prepend(1);

// console.log(list.size());

// console.log(list.toString());

// console.log(list.tail());

// console.log(list.at(3));
// console.log(list.at(8));

// list.pop();
// console.log(list.toString());
// console.log(list.contains("snake"));
// console.log(list.find("snake"));
// console.log(typeof list);

export { LinkedList, Node };
