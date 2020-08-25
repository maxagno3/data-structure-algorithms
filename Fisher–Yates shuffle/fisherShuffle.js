function fisherShuffle(array) {
  let cloneArray = array.slice(0);
  for (let i = cloneArray.length - 1; i > 0; i -= 1) {
    const index = Math.floor(Math.random() * (i + 1));
    [cloneArray[i], cloneArray[index]] = [cloneArray[index], cloneArray[i]];
  }
  return cloneArray;
}
