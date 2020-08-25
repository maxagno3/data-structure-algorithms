function countingSort(integers, min, max) {
  let counts = new Array(max - min + 1).fill(0);

  let offset = Math.abs(min);

  integers.forEach((integer) => counts[integer + offset]++);

  const sortedIntegers = [];

  for (let integer = min; integer <= max; integer++) {
    let count = counts[integers + offset];

    while (count > 0) {
      sortedIntegers.push(integer);
      count--;
    }
  }
  return sortedIntegers;
}
