function getDigit(num: number, index: number) {
  return Math.floor((Math.abs(num) / Math.pow(10, index)) % 10);
}

function digitCount(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

console.log(digitCount(10000000000023791));
