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
    const name = key;
    let obj = {};
    obj[name] = value;
    let location = this.#hash(key);
    if (this.get(key)) {
      let current = this.buckets[location].head;
      let prev = null;
      while (current) {
        let bucketItem = Object.values(Object.keys(current.value));
        //   console.log(bucketItem);
        // console.log(c)
        if (bucketItem.includes(key)) {
          current.value[key] = value;
        }
        prev = current;
        current = current.next;
      }
    }

    return this.buckets[location].append(obj);

    // "update" value of already existing key
    //needs to grow with load factor aswell
  }

  get(key) {
    let location = this.#hash(key);
    console.log(location);
    let current = this.buckets[location].head;
    let prev = null;
    while (current) {
      let bucketItem = Object.values(Object.keys(current.value));
      //   console.log(bucketItem);
      // console.log(c)
      if (bucketItem.includes(key)) {
        return "Found value: " + current.value[key];
      }
      prev = current;
      current = current.next;
    }
  }

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
hashMap.set("Rama", "apple");

// console.log(hashMap.storage[3]);
console.log(hashMap);
console.log(hashMap.get("Rama"));
// console.log(hashMap.storage.length);
