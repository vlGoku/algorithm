"use strict";
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function pivot(arr, start = 0, end = arr.length - 1) {
    let j = start;
    let pivotElement = arr[j];
    for (let i = start + 1; i <= end; i++) {
        if (pivotElement > arr[i]) {
            j++;
            swap(arr, i, j);
        }
    }
    swap(arr, start, j);
    return j;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
const unsortedArray = [4, 3, 6, 7, 1, 2, 9];
console.log(quickSort([4, 3, 6, 7, 1, 2, 9]));
//# sourceMappingURL=pivot.js.map