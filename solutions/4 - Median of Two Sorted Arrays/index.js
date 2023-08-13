/* Leetcode Question: https://leetcode.com/problems/median-of-two-sorted-arrays/ */

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
