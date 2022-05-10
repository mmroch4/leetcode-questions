/* Leetcode Question: https://leetcode.com/problems/product-of-array-except-self/ */

const productExceptSelf = (nums) => {
  if (nums.length < 2) return false;

  const productsArray = [];

  for (const [ix] of nums.entries()) {
    let product = 1;

    for (const [iy, y] of nums.entries()) {
      if (ix === iy) continue;

      product *= y;
    }

    productsArray.push(product);
  }

  return productsArray;
};
