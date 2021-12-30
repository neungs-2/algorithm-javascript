const checkIp = (str) => {
  const IPV4REG = new RegExp(
    '^((([1-9]\\d{0,2})|0)\\.){3}(([1-9]\\d{0,2})|0)$'
  );
  const IPV6REG = new RegExp(
    '^((([0-9a-fA-F]{4})|0):){7}(([0-9a-fA-F]{4})|0)$'
  );

  const result = IPV4REG.test(str)
    ? 'IPv4'
    : IPV6REG.test(str)
    ? 'IPv6'
    : 'Neither';

  return result;
};

let ipv4 = '123.255.140.240';
let ipv6 = 'A321:b321:0:0:0000:32C1:A31f:0321';

console.log(checkIp(ipv4));
console.log(checkIp(ipv6));
console.log(checkIp('Developer'));
