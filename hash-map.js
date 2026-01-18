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

    return this.buckets[location].append(obj);

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
hashMap.set("be", "watermelon");
hashMap.set("dog", "brown");

// console.log(hashMap.buckets[3].size());

// console.log(hashMap.storage[3]);
// console.log(hashMap);
// console.log(hashMap.get("RaeS"));
// console.log(hashMap.get("Rama"));
// console.log(hashMap.has("RaeS"));

// console.log(hashMap.has("Rama"));

// console.log(hashMap.has("Sita"));

// console.log(hashMap.remove("RaeS"));

console.log(hashMap.remove("Rama"));
console.log(hashMap.has("Rama"));
console.log(hashMap.has("be"));
console.log(hashMap.buckets[3]);

console.log(hashMap.remove("dog"));
console.log(hashMap.has("dog"));

console.log(hashMap.buckets);
// console.log(hashMap.buckets[3].size());

// console.log(hashMap.storage.length);
