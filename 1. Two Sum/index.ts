/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // get the length of the array
  let bIndex = nums.length - 1;
  // initiate an hash table
  const hash = {};

  // iterate over the array from the right to the left
  while (bIndex >= 0) {
    // calculate the target number
    const n1 = target - nums[bIndex];

    // if the target number is in the array return it
    if (hash[n1]) {
      return [bIndex, hash[n1]];
    }

    // populate the hash table
    hash[nums[bIndex]] = bIndex;

    // decrease bIndex by one
    bIndex--;
  }
};
