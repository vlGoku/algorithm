function swap(arr: number[], index1: number, index2: number) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function pivot(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number {
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

function quickSort(
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

const unsortedArray = [4, 3, 6, 7, 1, 2, 9];

console.log(quickSort([4, 3, 6, 7, 1, 2, 9]));
