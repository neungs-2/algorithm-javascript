function solution(directory, command) {
  let dir = [...directory];

  const remove = (rmDir, path) => {
    const rd = rmDir.split('/');
    const p = path.split('/');
    p.length = rd.length;

    return JSON.stringify(rd) !== JSON.stringify(p);
  };

  const copy = (source, dest, path) => {
    const sc = source.split('/');
    const p = path.split('/');
    const parentsPath = p.splice(0, sc.length);

    if (JSON.stringify(sc) === JSON.stringify(parentsPath)) {
      const copyPath = dest + '/' + sc[sc.length - 1] + '/' + p.join('/');
      const trimPath =
        copyPath.slice(-1, copyPath.length) === '/'
          ? copyPath.slice(0, -1)
          : copyPath;
      dir.push(trimPath);
    }
  };

  for (let com of command) {
    const comArr = com.split(' ');

    if (comArr[0] === 'mkdir') {
      dir.push(comArr[1]);
    } else if (comArr[0] === 'rm') {
      dir = dir.filter((element) => remove(comArr[1], element));
    } else if (comArr[0] === 'cp') {
      dir.forEach((element) => copy(comArr[1], comArr[2], element));
    }
  }
  return dir;
}

const directory = [
  '/',
  '/hello',
  '/hello/tmp',
  '/root',
  '/root/abcd',
  '/root/abcd/etc',
  '/root/abcd/hello',
];

const command = ['mkdir /root/tmp', 'cp /hello /root/tmp', 'rm /hello'];

console.log(solution(directory, command));

// answer = [
//   '/',
//   '/root',
//   '/root/abcd',
//   '/root/abcd/etc',
//   '/root/abcd/hello',
//   '/root/tmp',
//   '/root/tmp/hello',
//   '/root/tmp/hello/tmp',
// ];
