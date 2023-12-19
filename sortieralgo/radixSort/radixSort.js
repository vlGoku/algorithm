"use strict";
function getDigit(num, index) {
    return Math.floor((Math.abs(num) / Math.pow(10, index)) % 10);
}
function digitCount(num) {
    if (num === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}
function mostDigits(num) {
    let maxDigits = 0;
    let tempNum = 0;
    for (let i = 0; i < num.length; i++) {
        tempNum = digitCount(num[i]);
        if (tempNum > maxDigits) {
            maxDigits = tempNum;
        }
    }
    return maxDigits;
}
function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({ length: 10 }, () => []);
        arr.forEach((num) => {
            buckets[getDigit(num, i)].push(num);
        });
        arr = [].concat(...buckets);
    }
    return arr;
}
console.log(radixSort([12, 34, 541, 1000, 761, 2310, 6541, 774]));
//# sourceMappingURL=radixSort.js.map