const solution = (phone_number) =>
  phone_number
    .slice(0, -4)
    .split('')
    .map((_) => '*')
    .join('') + phone_number.slice(-4);
