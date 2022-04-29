/* Leetcode Question: https://leetcode.com/problems/two-sum/ */

const twoSum = (nums = [0, 1, 2], target) => {
  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
      if (x === y) continue;

      if (nums[x] + nums[y] === target) return [x, y];
    }
  }
};
