# [Javascript] Simple and fast solution

#### Average execution time: **~70ms**

```js
function findMedianSortedArrays(nums1, nums2) {
  if (!nums1.length && !nums2.length) {
    return;
  }

  const mergedNums = [...nums1, ...nums2].sort((a, b) => a - b);

  const mergedNumsLength = mergedNums.length;

  if (!(mergedNumsLength % 2)) {
    const leftNum = mergedNums[mergedNumsLength / 2 - 1];
    const rightNum = mergedNums[mergedNumsLength / 2];

    return (leftNum + rightNum) / 2;
  } else {
    return mergedNums[(mergedNumsLength - 1) / 2];
  }
}
```

## **Syntax**

```ts
findMedianSortedArrays(nums1: Array<number>, nums2: Array<number>): number
```

## **Return**

**findMedianSortedArrays** will receive 2 params, **_nums1_** and **_nums2_**. Then, it will return the _median_ of the 2 sorted arrays.
