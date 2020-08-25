// using for loop.
function factorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
    console.log(total);
  }
  return total;
}

factorial(5);

// using recursion.
function factorialRecursion(n) {
  console.log(n);
  if (n === 1) {
    // base case.
    return 1; // recursive case.
  }
  return n * factorialRecursion(n - 1);
}

factorialRecursion(5);
