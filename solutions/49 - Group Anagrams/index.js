/* Leetcode Question: https://leetcode.com/problems/group-anagrams/ */

const makeGroupAnagrams = (strs) => {
  const map = new Map();

  const groups = []

  for (const str of strs) {
    const key = str.split('').sort().join('');
    
    if (map.has(key)) map.set(key, [...map.get(key), str])
    else map.set(key, [str])
  }

  map.forEach((group) => groups.push(group))
  
  return groups
};
