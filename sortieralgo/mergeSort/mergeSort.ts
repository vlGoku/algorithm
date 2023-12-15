function merge(arr1: number[], arr2: number[]): number[] {
    const sortedArray: number[] = [];
    let i = 0;
    let j = 0;
    //sorted Array
    //[1, 3, 5, 7] [2, 4, 6, 8]
    //[1, 2, 3, 4,...]
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArray.push(arr1[i]);
            i++;
        } else {
            sortedArray.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        sortedArray.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        sortedArray.push(arr2[j]);
        j++;
    }
    return sortedArray;
}

function mergeSort(arr: number[]): number[] {

    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let newArr1: number[] = mergeSort(arr.slice(0, middle)); 
    let newArr2: number[] = mergeSort(arr.slice(middle, arr.length));

    return merge(newArr1, newArr2);
}

let unsortedArray = [1, 4, 7, 8, 2, 5, 3, 6, 9, 12, 11];
console.log(mergeSort(unsortedArray));