# Tip.

**Javascript의 SWAP**

- Sorting algorithm 구현 시 swap을 다음과 같이 구현했음

```js
let a = 3;
let b = 5;

let temp = a;
a = b;
b = temp;
```

<br>

- JS에서 더 간단한 방법으로 swap 구현 가능

```js
let a = 3;
let b = 5;

[a, b] = [b, a];
```
