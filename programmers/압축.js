//LZW 압축

const arr = [];

//A부터 Z까지 미리 사전에 등록해 놓는다.
for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
  arr.push(String.fromCharCode(i));
}

console.log(arr);
console.log('A'.charCodeAt(0));

const a = {};

a['a'] = 1;

console.log(a);

for (let i of 'abcd') console.log(i);
const word = 'abdc';
const array = ['a', 'b', 'd'];

console.log(array[0:1].join(''));
