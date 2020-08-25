const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const getCipherMap = (alphabet, shift) => {
  return alphabet.reduce((charsMap, currentChar, charIndex) => {
    const charsMapClone = { ...charsMap };
    let encryptedIndex = (charIndex + shift) % alphabet.length;
    if (encryptedIndex < 0) {
      encryptedIndex += alphabet.length;
    }
    charsMapClone[currentChar] = alphabet[encryptedIndex];
    return charsMapClone;
  }, {});
};

const caesarEncrypt = (str, shift, alphabet = englishAlphabet) => {
  let cipherMap = getCipherMap(alphabet, shift);
  return str
    .toLowerCase()
    .split("")
    .map((char) => cipherMap[char] || char)
    .join("");
};

const caesarDecrypt = (str, shift, alphabet = englishAlphabet) => {
  let cipherMap = getCipherMap(alphabet, -shift);
  return str
    .toLowerCase()
    .split("")
    .map((char) => cipherMap[char] || char)
    .join("");
};
