function binarySearch(target, array) {
  let left = 0;
  let right = array.length - 1;
  // console.log(right);

  while (left <= right) {
    let mid = Math.floor((left + right + 1) / 2);
    // console.log(array[mid]);

    if (target > array[mid]) {
      left = mid;
      // console.log(right);
    } else if (target < array[mid]) {
      right = mid - 1;
    } else if (array[mid] === target) {
      return array[mid];
    }
  }
  return "value not found";
}

let array = [2, 4, 7, 8, 9, 10, 11, 16, 21];
console.log(binarySearch(16, array));
