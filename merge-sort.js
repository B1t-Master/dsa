function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let midPoint = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midPoint));
  let right = mergeSort(array.slice(midPoint));

  return merge(left, right);
}

function merge(leftSubarray, rightSubarray) {
  let result = [];
  let j = 0;
  let i = 0;

  while (leftSubarray.length > i && rightSubarray.length > j) {
    if (leftSubarray[i] <= rightSubarray[j]) {
      result.push(leftSubarray[i]);
      i++;
    } else {
      result.push(rightSubarray[j]);
      j++;
    }
  }
  return [...result, ...leftSubarray.slice(i), ...rightSubarray.slice(j)];
}
// mergeSort(array);
//base case
//recusrive case

array = [6, 8, 3, 4, 25, 6, 7];
console.log(mergeSort(array));
