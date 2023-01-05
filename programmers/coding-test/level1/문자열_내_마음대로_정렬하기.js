const solution = (strings, n) =>
  strings.sort((next, prev) =>
    next[n] === prev[n]
      ? next.localeCompare(prev)
      : next.charCodeAt(n) - prev.charCodeAt(n)
  );
