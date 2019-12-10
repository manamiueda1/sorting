function swap(arr, i, j) {
  if (arr[i] < arr[j]) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      swap(array, i, j);
    }
  }

  return array;
}
