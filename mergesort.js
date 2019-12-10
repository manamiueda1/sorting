function split(wholeArray) {
  const midPoint = Math.round(wholeArray.length / 2);
  const leftHalf = wholeArray.slice(0, midPoint);
  const rightHalf = wholeArray.slice(midPoint, wholeArray.length);

  return [leftHalf, rightHalf];
}

function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      sorted.push(arr2.shift());
    } else {
      sorted.push(arr1.shift());
    }
  }
  if (arr1.length) {
    sorted = sorted.concat(arr1);
  }
  if (arr2.length) {
    sorted = sorted.concat(arr2);
  }
  return sorted;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let arrayHalves = split(array);
  let sortedLeft = mergeSort(arrayHalves[0]);
  let sortedRight = mergeSort(arrayHalves[1]);

  return merge(sortedLeft, sortedRight);
}
