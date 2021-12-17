function solution(new_id) {
  var answer = '';

  answer = new_id
    .toLowerCase()
    .replace(/[^\w\-_.]/gi, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .substr(0, 15)
    .replace(/^\.|\.$/g, '');

  while (answer.length < 3) {
    answer += answer.charAt(answer.length - 1);
  }

  return answer;
}

const result = solution('...!@BaT#*..y.abcdefghijklm');
console.log(result);
