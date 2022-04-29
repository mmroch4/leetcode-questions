/* Leetcode Question: https://leetcode.com/problems/valid-anagram/ */

const isValidAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  s.toLowerCase();
  t.toLowerCase();
  
  const S = s.split('').sort().join('');
  const T = t.split('').sort().join('');

  return S === T;
};
