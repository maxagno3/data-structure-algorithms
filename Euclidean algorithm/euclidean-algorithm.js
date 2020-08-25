function euclideanAlgorithm(num1, num2) {
  while (num1 != num2) {
    if (num1 > num2) return (num1 = num1 - num2);
    else num2 = num2 - num1;
  }
  return num2;
}

function gcd(a, b) {
  let R;
  while (a % b > 0) {
    R = a % b;
    a = b;
    b = R;
  }
  return b;
}

function euclideanAlgorithms(numA, numB) {
  let a = Math.abs(numA);
  let b = Math.abs(numB);
  return b === 0 ? a : euclideanAlgorithms(b, a % b);
}
