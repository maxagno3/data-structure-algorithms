function sieveOfEratosthenes(num) {
  const isPrime = new Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  const primes = [];
  for (let n = 2; n <= num; n += 1) {
    if (isPrime[n] === true) {
      primes.push(n);
      let nextNum = 2 * num;
      while (nextNum <= num) {
        isPrime[nextNum] = false;
        nextNum += n;
      }
    }
  }
  return primes;
}
