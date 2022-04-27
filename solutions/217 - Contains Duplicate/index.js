/* Leetcode Question: https://leetcode.com/problems/contains-duplicate/ */

const containsDuplicate = (array) => {
  for (const value of array) {
    const result = array.filter((item) => item === value);

    if (result.length > 1) {
      return true;
    }
  }

  return false;
};
