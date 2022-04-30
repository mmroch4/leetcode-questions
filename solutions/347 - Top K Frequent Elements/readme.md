# [Javascript] Simple solution

#### Average execution time: **0.113ms**

```js
const topKFrequent = (nums, k) => {
  const map = new Map();
  const dump = [];
  const topFrequents = [];

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else map.set(num, 1);
  }

  if (k > map.size || k < 1) return false;

  map.forEach((value, key) => dump.push([key, value]));

  dump.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    topFrequents.push(dump[i][0]);
  }

  return topFrequents;
};
```

## **Syntax**

```ts
topKFrequent(nums: Array<number>, k: number): Array<number>
```

## **Return**

**topKFrequent** receives 2 params, ***nums*** and ***k***. ***nums*** is an array of numbers and ***k*** is the most frequent elements.
