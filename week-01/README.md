### 1. Rotate String

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

## Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true


## Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 

## Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.

**Concepts:** String manipulation, rotations

Thoughts for solutions
step 1 - work out if s and goal is same length. If not same length it can't be the same
step 2 - make every possible shift version of s (but adding s to s)
Step 3 - Check if new string has `goal`
Step 4 -  if `goal` is found in the new string, return true

**Googled solution**
```JS
var rotateString = function(s, goal) {
    return (s.length === goal.length) && ((s + s).includes(goal));
};
```
1. ``` (s.length === goal.length)```
If the strings aren't the same length, they can’t be rotations of each other.

This is a quick fail check.

2. ```(s + s)```
Doubling the string ```(s + s)``` creates a version that contains all possible rotations of s.

Example:
"abcde" + "abcde" → "abcdeabcde"
This contains: "bcdea", "cdeab", "deabc", etc.

3. .includes(goal)
Checks if goal is a substring of the doubled string.

If yes → s can be rotated into goal

If no → return false

4. &&
Combines both conditions.

Only returns true if both are satisfied.
