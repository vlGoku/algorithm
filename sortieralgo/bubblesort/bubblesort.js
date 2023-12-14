"use strict";
function bubbleSort(array) {
    const n = array.length;
    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                const temporary = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporary;
            }
        }
    }
    return array;
}
const unsortedArray = [12, 22, 1, 4, 5, 90, 100];
console.log(bubbleSort(unsortedArray));
//# sourceMappingURL=bubblesort.js.map