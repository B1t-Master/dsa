import { LinkedList } from "./linked-list.js";

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.storage = Array(this.capacity);
    this.preventCollisions(this.storage);
  }

  preventCollisions(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = new LinkedList();
    }
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0, len = key.length; i < len; i++) {
      let chr = key.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    // console.log(hash);
    return hash % this.capacity;
  }

  set(key, value) {
    let location = this.#hash(key);
    if (!this.storage[location]) return this.storage[location].append(value);

    return this.storage[location].append(value);
    // this.#hash(key);
    //needs to grow with load factor aswell
  }

  get(key) {}

  has(key) {}

  remove(key) {}

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}

let hashMap = new HashMap();
hashMap.set("Rama", "banana");
hashMap.set("Sita", "green");

console.log(hashMap.storage[3]);
// console.log(hashMap.storage.length);
