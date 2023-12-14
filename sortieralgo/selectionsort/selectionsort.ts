function selectionSort(array: number[]): number[]{

    function swap (arr: number[], index1: number, index2: number){
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    for(let i = 0; i < array.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            swap(array, i, minIndex);
        }
    }
    return array
}

const unsortedArray = [44, 54, 88, 1, 23, 89, 22];
console.log(selectionSort(unsortedArray));