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
    if (this.get(key)) {
      let current = this.buckets[location].head;
      while (current) {
        let bucketItem = Object.values(Object.keys(current.value));
        if (bucketItem.includes(key)) {
          current.value[key] = value;
        }
        current = current.next;
      }
    }

    return this.buckets[location].append(obj);

    // "update" value of already existing key- done
    //needs to grow with load factor aswell
  }

  get(key) {
    let location = this.#hash(key);
    // console.log(location);
    let current = this.buckets[location].head;
    while (current) {
      let bucketItem = Object.values(Object.keys(current.value));
      //   console.log(bucketItem);
      // console.log(c)
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
hashMap.set("Rama", "apple");

// console.log(hashMap.storage[3]);
// console.log(hashMap);
// console.log(hashMap.get("RaeS"));
// console.log(hashMap.get("Rama"));
console.log(hashMap.has("RaeS"));
console.log(hashMap.has("Rama"));

// console.log(hashMap.storage.length);
