const checkIp = (str) => {
  const IPV4REG = new RegExp(
    '^((([1-9]\\d{0,2})|0)\\.){3}(([1-9]\\d{0,2})|0)$'
  );
  const IPV6REG = new RegExp(
    '^((([0-9a-fA-F]{4})|0):){7}(([0-9a-fA-F]{4})|0)$'
  );

  let result;

  if (IPV4REG.test(str)) result = 'IPv4';
  else if (IPV6REG.test(str)) result = 'IPv6';
  else result = 'Neither';

  return result;
};

// let ipv4 = '123.902.0.0';
// let ipv6 = 'A321:b321:0:0:0000:32C1:A31f:0321';

// console.log(checkIp(ipv4));
// console.log(checkIp(ipv6));
// console.log(checkIp('Developer'));
