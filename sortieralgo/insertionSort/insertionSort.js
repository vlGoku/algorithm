//Lösung
function insertionSort(arr) {
    var j = 0;
    for (var i = 1; i < arr.length; i++) {
        var currentItem = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currentItem; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentItem;
    }
    return arr;
}
var unsortedArray = [3, 4, 1, 6, 2, 9, 7, 6];
insertionSort(unsortedArray);
