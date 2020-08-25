// using for loop.
function hammingDistance(word, matchingWord) {
  let count = 0;
  if (word.length === matchingWord.length) {
    for (let i = 0; i <= word.length; i++) {
      if (word.toLowerCase()[i] !== matchingWord.toLowerCase()[i]) {
        count++;
      }
    }
  }
  return count;
}

console.log(hammingDistance("I like turtles", "I like turkeys"));

// using while loop.
function hammingDistances(word, matchingWord) {
  let count = 0;
  let i = 0;
  if (word.length === matchingWord.length) {
    while (i <= word.length) {
      if (word.toLowerCase()[i] !== matchingWord.toLowerCase()[i]) {
        count++;
      }
      i++;
    }
  }
  return count;
}

console.log(hammingDistances("I like turtles", "I like turkeys"));

// using do while loop.
function hammingDistancess(word, matchingWord) {
  let count = 0;
  let i = 0;
  if (word.length === matchingWord.length) {
    do {
      if (word.toLowerCase()[i] !== matchingWord.toLowerCase()[i]) {
        count++;
      }
      i++;
    } while (i <= word.length);
  }
  return count;
}

console.log(hammingDistancess("I like turtles", "I like turkeys"));
