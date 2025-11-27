function binarySearch(target, array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right + 1) / 2);

    if (target > array[mid]) {
      left = mid + 1;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else if (array[mid] === target) {
      return array[mid];
    }
  }
  return "value not found";
}

let array = [2, 4, 7, 8, 9, 10, 11, 16, 21];
console.log(binarySearch(4, array));
