// Check prime (Most Efficient Approach)

function CheckPrime(num) {
  if (num) {
    if (num === 1) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 0; i * i <= num; i = i + 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log("IS Prime", CheckPrime(17));
