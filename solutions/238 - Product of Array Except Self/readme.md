# [Javascript] Simple solution

#### Average execution time: **2.972ms**

```js
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
```

## **Syntax**

```ts
productExceptSelf(nums: number[]): number[] | boolean
```

## **Return**

**productExceptSelf** is Given an _integer array_ **nums**, return an _array_ answer such that **answer[i]** is equal to the product of all the elements of nums except **nums[i]**.

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
