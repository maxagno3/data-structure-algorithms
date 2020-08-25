function heapify(arr, length, i) {
  let largest = i; // index of parent element being heapified.
  let left = i * 2 + 1; // left side of the heap.
  let right = left + 1; // right side of the heap.
  // checking if our parent is larger than the left/right child. If it isn’t, we are going to assign our variable largest to the left child, because it will currently be the largest!
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // if largest is not referring to the parent element, we swap the largest element with the parent and putting them in their
  // appropriate places.
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, length, largest);
  }
  return arr;
}

// heapSort
function heapSort(arr) {
  let length = arr.length;
  let i = Math.floor(length / 2 - 1); // finding the last parent node.
  let k = length - 1; // finding the last child.

  while (i >= length) {
    heapify(arr, length, i);
    i--;
  }

  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[i]];
    heapify(arr, k, 0);
    k--;
  }
  return arr;
}
