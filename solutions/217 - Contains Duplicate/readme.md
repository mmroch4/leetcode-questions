# [Javascript] Simple solution

#### Average execution time: **0.069ms**

```js
const containsDuplicate = (array) => {
  for (const value of array) {
    const result = array.filter((item) => item === value);

    if (result.length > 1) {
      return true;
    }
  }

  return false;
};
```

## **Syntax**

```ts
containsDuplicate(array: Array<any>)
```

## **Return**

If **containsDuplicate** receives as parameter an array which contains duplicated values, it will return **true**. Otherwise, **containsDuplicate** will return **false**.
