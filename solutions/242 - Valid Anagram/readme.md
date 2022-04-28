# [Javascript] Simple solution

#### Average execution time: **2.42ms**

```js
const isValidAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  s.toLowerCase();
  t.toLowerCase();

  const S = s.split('').sort().join();
  const T = t.split('').sort().join();

  return S === T;
};
```

## **Syntax**

```ts
isValidAnagram(s: string, t: string): boolean
```

## **Return**

**isValidAnagram** receives 2 *strings* and then, will check if the entered strings are anagrams. If they are, it will return true, otherwise, it will return false.
