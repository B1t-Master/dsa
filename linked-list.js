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
  prepend() {}

  size() {}

  tail() {}

  at(index) {}

  pop() {}

  contains() {}

  find() {}
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

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
