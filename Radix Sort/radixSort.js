// passing an array function returns max number length.
function getMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (max < num.toString().length) {
      max = num.toString().length;
    }
  }
  return max;
}

// console.log(getMax([3, 44, 533]));

function getPosition(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// console.log(getPosition(243, 1));

function radixSort(arr) {
  const max = getMax(arr); // returns length of max digit.

  // first for loop helps in getting the number of places like 1's, 10's and 100's and resetting the buckets.
  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    // second loop is used to loop over every number in the sorted array and push into it's desired buckets
    for (let j = 0; j < arr.length; j++) {
      buckets[getPosition(arr[j], i)].push(arr[j]); // pushing into the buckets
    }
    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([4, 57, 7, 3, 933])); // [3,4,7,57,933]
