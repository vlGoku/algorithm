function bubbleSort(arr) {
    var n = arr.length;
    for (var i = n - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var unsortedArray = [12, 22, 1, 4, 5, 90, 100];
console.log(bubbleSort(unsortedArray));
