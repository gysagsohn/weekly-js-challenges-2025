/**
 * @param {number} n
 * @return {boolean}
 */
console.log("=== Recursive Method ===");
function isPowerOfTwoRecursive(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  if (n % 2 !== 0) return false;
  return isPowerOfTwoRecursive(n / 2);
}

console.log(isPowerOfTwoRecursive(5)); // false
console.log(isPowerOfTwoRecursive(1)); // true
console.log(isPowerOfTwoRecursive(8)); // true
console.log(isPowerOfTwoRecursive(0)); // false


console.log("\n=== Bitwise Method ===");
function isPowerOfTwoBitwise(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(5));  // false
console.log(isPowerOfTwoBitwise(1));  // true
console.log(isPowerOfTwoBitwise(8));  // true
console.log(isPowerOfTwoBitwise(0));  // false


console.log("\n=== Math Method ===");
function isPowerOfTwoMath(n) {
  return n > 0 && Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwoMath(5));  // false
console.log(isPowerOfTwoMath(1));  // true
console.log(isPowerOfTwoMath(8));  // true
console.log(isPowerOfTwoMath(0));  // false
