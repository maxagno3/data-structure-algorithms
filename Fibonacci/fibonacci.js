// using for loop.
function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  for (let i = 0; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  console.log(num2);
  return num2;
}

fibonacci(5);

// using while loop.
function fibonacciNum(num) {
  let a = 1;
  let b = 0;
  let temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  console.log(b);
  return b;
}

fibonacciNum(5);

// using recursion.
function fibonacciRecur(num) {
  if (n <= 1) return 1;
  return fibonacciRecur(num - 1) + fibonacciRecur(num - 2);
}

// memoization
// is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls.
function fibonacciMemo(num, memo) {
  memo = memo || {};
  if (memo[num]) return memo[num];
  if (n <= 1) return 1;
  return (memo[num] =
    fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo));
}
