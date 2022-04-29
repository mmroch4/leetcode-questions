# [Javascript] Simple solution

#### Average execution time: **0.098ms**

```js
const twoSum = (nums, target) => {
  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
      if (x === y) continue;

      if (nums[x] + nums[y] === target) return [x, y];
    }
  }
};
```

## **Syntax**

```ts
twoSum(nums: Array<number>, target: number): Array<number>
```

## **Return**

**twoSum** will receive 2 params, ***nums*** and ***target***. Then, it will return the *indices* of the 2 numbers such that they add up to ***target***.
