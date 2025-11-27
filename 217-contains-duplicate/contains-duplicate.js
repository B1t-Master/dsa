/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums = nums.sort();
  let ptr1 = 0;
  let ptr2 = 1;

  while (ptr2 < nums.length) {
    if (nums[ptr1] === nums[ptr2]) {
      return true;
    } else {
      ptr1++, ptr2++;
    }
  }

  return false;
};