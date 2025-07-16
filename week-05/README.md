# 231. Power of Two

https://leetcode.com/problems/power-of-two/description/

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2^x.


## Example 1:

Input: n = 1
Output: true
Explanation: 2^0 = 1


## Example 2:

Input: n = 16
Output: true
Explanation: 2^4 = 16


## Example 3:

Input: n = 3
Output: false
 

## Constraints:

-231 <= n <= 231 - 1
 

## Follow up: Could you solve it without loops/recursion?

### Recursive Method
1) N needs to be a positive number
2) If N = 1 then return true as anything power to 0 is 1
3) if n divded by 2 and there is a reminder then it is not a power of 2 so return false

### Bitwise Trick

**Core Idea**:  
A number is a power of two if it has only **one `1` bit** in its binary representation.

**How it works**:
- When you subtract 1 from a power of two, all the bits flip after the `1` bit.
- Performing a bitwise `AND` between `n` and `n - 1` removes the lowest `1` bit.
- If the result is `0`, then `n` was a power of two.

### MaCore Idea:
If n is a power of two, then Math.log2(n) will return an integer.

**How it works:**

Calculate Math.log2(n)

Use Number.isInteger() to check if the result is a whole number.


