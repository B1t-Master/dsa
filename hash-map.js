import { LinkedList } from "./linked-list.js";

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = Array(this.capacity);
    this.preventCollisions(this.buckets);
  }

  preventCollisions(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = new LinkedList();
    }
  }

  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    const name = key;
    let obj = {};
    obj[name] = value;
    let location = this.#hash(key);
    if (this.has(key)) {
      let head = this.buckets[location].head;
      let current = head;
      while (current) {
        let bucketItem = Object.values(Object.keys(current.value));
        if (bucketItem.includes(key)) {
          return (current.value[key] = value);
        }
        current = current.next;
      }
    }
    this.buckets[location].append(obj);
    //trigger growth
    if (this.capacity * this.loadFactor < this.length()) {
      this.capacity *= 2;
      let entries = this.entries();
      this.clear();
      this.buckets = Array(this.capacity);
      this.preventCollisions(this.buckets);

      entries.forEach((element) => {
        // console.log(element[1]);
        this.set(element[0], element[1]);
      });
    }

    // "update" value of already existing key- done
    //needs to grow with load factor aswell
  }

  get(key) {
    let location = this.#hash(key);
    // console.log(location);
    let current = this.buckets[location].head;
    // console.log(current);
    while (current) {
      let bucketItem = Object.values(Object.keys(current.value));
      //   console.log(bucketItem);
      if (bucketItem.includes(key)) {
        return current.value[key];
      }
      current = current.next;
    }
    return null;
  }

  has(key) {
    if (!this.get(key)) return false;
    return true;
  }

  remove(key) {
    if (!this.has(key)) return false;
    let location = this.#hash(key);
    // console.log(this.buckets[location].head);
    let head = this.buckets[location].head;
    let current = head;
    let prev = null;
    while (current) {
      let bucketItem = Object.values(Object.keys(current.value));
      if (!bucketItem.includes(key)) continue;
      if (head === current) {
        this.head = current.next;
        this.buckets[location].head = this.head;
        current.next = null;
        return true;
      }
      prev.next = current.next;
      current.next = null;
    }
    prev = current;
    current = current.next;

    return true;
  }

  length() {
    let length = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      // console.log(this.buckets[i].size());
      length = length + this.buckets[i].size();
    }
    return length;
  }

  clear() {
    this.preventCollisions(this.buckets);
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      // console.log(this.buckets[i].size());
      let current = this.buckets[i].head;
      while (current) {
        let bucketItem = Object.values(Object.keys(current.value));
        keys.push(...bucketItem);
        current = current.next;
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let current = this.buckets[i].head;
      while (current) {
        let bucketItem = Object.values(current.value);

        values.push(...bucketItem);
        current = current.next;
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let current = this.buckets[i].head;
      while (current) {
        let bucketItem = [
          ...Object.values(Object.keys(current.value)),
          ...Object.values(current.value),
        ];

        entries.push(bucketItem);
        current = current.next;
      }
    }
    return entries;
  }
}

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("moon", "silver");
console.log(test.length());
// console.log(test);
