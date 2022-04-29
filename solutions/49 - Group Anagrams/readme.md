# [Javascript] Simple solution

#### Average execution time: **0.098ms**

```js
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
```

## **Syntax**

```ts
makeGroupAnagrams(strs: Array<string>): Array<Array<string>>
```

## **Return**

**makeGroupAnagrams** receives 1 param, ***strs***. Then, it will group the anagrams together.
