function pascalsTriangle(lineNumber) {
  let currentLine = [1];
  let currentLineSize = lineNumber + 1;
  for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    currentLine[numIndex] =
      (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex;
  }
  return currentLine;
}

console.log(pascalsTriangle(4));
