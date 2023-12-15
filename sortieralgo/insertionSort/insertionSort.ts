//Lösung

function insertionSort(arr: number[]){
    let j = 0;
    for(let i = 1; i < arr.length; i++){
        let currentItem = arr[i];
        for(j = i - 1; j >= 0 && arr[j] > currentItem; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentItem;
    }
    return arr;
}

const unsortedArray = [3,4,1,6,2,9,7,6];

insertionSort(unsortedArray);