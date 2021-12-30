## 3. 회문(Palindrome) 확인<a id="3"></a>

### **[문제]**

- 문자열이 주어지면 해당 문자열이 회문인지 아닌지 확인
- 회문인지 확인하는 문자는 알파벳과 숫자 (대/소문자 구분x)
- ex) 'AbbcbBa' --> true

### Tip. 문자열 합치기

- **+** 연산자

  - 가장 성능이 우수함

  ```js
  let str = 'Hello';
  str += ' ';
  str += 'world';

  console.log(str); // Hello world
  ```

<br>

- concat 함수

  - 파라미터로 문자열 이외의 다른 값도 넣을 수 있음
  - 배열이 arg로 들어가면 배열의 concat으로 인식

  ```js
  const result = 'Hello'.concat(' ', 'world', '!');

  document.write(result); // Hello world!
  ```

<br>

- join 함수

  - 문자열을 이어 붙일 때 separator(구분자)를 지정

  ```js
  const str1 = ['Hello', 'world'].join();
  const str2 = ['Hello', 'world'].join('♥');

  document.write(str1);
  document.write('<br>');
  document.write(str2);
  // Hello,world
  // Hello♥world
  ```

  <br>

---

## 4. 그룹 애너그램<a id="4"></a>

### **[문제]**

- 주어지는 문자열 리스트를 검사해 서로 같은 애너그램을 가지는 문자열을 그룹으로 묶기
- ex) str = ['eat', 'repaid', 'paired', 'tea', 'bat']
  - result = [['eat', 'tea'], ['repaid', 'paired'], ['bat']]

<br>

### Tip. 배열 중복 제거

- Set 객체

```js
const arr = [1, 2, 3, 3, 2];
const set = new Set(arr);
const uniqueArr = [...set];

document.writeln(Array.isArray(uniqueArr)); // true
document.writeln(uniqueArr); // 1,2,3
```

- indexOf(), filter()
  - indexOf : 배열에서 특정값이 처음으로 나타나는 index를 리턴
  - filter : 특정 조건에 부합하는 배열의 모든 값을 배열 형태로 리턴

```js
const uniqueArr = arr.filter((element, index) => {
  return arr.indexOf(element) === index;
});

document.writeln(Array.isArray(uniqueArr));
document.writeln(uniqueArr);
```

- forEach(), includes()
  - forEach : 배열을 순회하면서, 배열의 원소들로 주어진 callback함수를 실행
  - includes : 배열에 특정 값이 포함되는지 여부를 검사

```js
arr.forEach((element) => {
  if (!uniqueArr.includes(element)) {
    uniqueArr.push(element);
  }
});

document.writeln(Array.isArray(uniqueArr));
document.writeln(uniqueArr);
```

---

## 5. IPv4 / IPv6 검증 시스템<a id="5"></a>

### **[문제]**

- 입력 값이 IPv4 형식, IPv6 형식 혹은 둘 다 아닌지 판단
- **IPv4**

  - 주소는 4개의 숫자가 점(.)으로 구분
  - 각 숫자 범위 0~255(3자리 10진수)
  - 각 숫자는 0으로 시작 불가능

- **IPv6**
  - 주소는 8개의 숫자가 콜론(:)으로 구분
  - 각 숫자 범위 0000~FFFF(4자리 16진수)
  - 숫자 0000 경우 0으로 대체 가능
  - 자리를 채우기 위해 0으로 시작 가능

<br>

### 정규식에서 사용되는 메소드

- **exec**
  - 대응되는 문자열을 찾는 RegExp 메소드
  - 정보를 가지고 있는 배열을 반환
  - 대응되는 문자열을 찾지 못했다면 null을 반환.

<br>

- **test**
  - 대응되는 문자열이 있는지 검사하는 RegExp 메소드
  - true 나 false를 반환합니다.

<br>

- **match**
  - 대응되는 문자열을 찾는 String 메소드
  - 정보를 가지고 있는 배열을 반환
  - 대응되는 문자열을 찾지 못했다면 null을 반환

<br>

- **search**
  - 대응되는 문자열이 있는지 검사하는 String 메소드
  - 대응된 부분의 인덱스를 반환
  - 대응되는 문자열을 찾지 못했다면 -1을 반환

<br>

- **replace**
  - 대응되는 문자열을 찾아 다른 문자열로 치환하는 String 메소드

<br>

- **split**
  - 정규식 혹은 문자열로 대상 문자열을 나누어 배열로 반환하는 String 메소드
