export default (x, length, remainder = '…') =>
  x.length > length ? x.slice(0, length) + remainder : x;
