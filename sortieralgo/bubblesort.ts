function bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const unsortedArray = [12, 22, 1, 4, 5, 90, 100];
console.log(bubbleSort(unsortedArray));