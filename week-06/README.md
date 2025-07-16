

# 283. Move Zeroes

https://leetcode.com/problems/move-zeroes/description/

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

## Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

## Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?

### Solution 1: Two Pointers (Swap Method)

**Steps**:
1. Initialize a pointer `lastNonZeroIndex` at index `0`.
2. Iterate through the array:
   - If the current element is non-zero:
     - Swap it with the element at `lastNonZeroIndex`.
     - Increment `lastNonZeroIndex`.
3. Continue until the end of the array.

**Why it works**:
- Non-zero elements are pushed forward.
- Zeroes get moved to the back via swapping.
- This preserves the relative order of non-zero elements.

**Time Complexity**: `O(n)`  
**Space Complexity**: `O(1)`

---

### Solution 2: Shift and Fill (Count Non-Zero)

**Steps**:
1. Initialize a pointer `nonZeroIndex = 0`.
2. First loop: Copy every non-zero element to `nums[nonZeroIndex]` and increment `nonZeroIndex`.
3. Second loop: From `nonZeroIndex` to the end, fill the remaining elements with `0`.

**Why it works**:
- Moves all non-zeroes to the front.
- Fills the rest of the array with zeroes.
- Also preserves the order of non-zero elements.

**Time Complexity**: `O(n)`  
**Space Complexity**: `O(1)`

---

### Solution 3: Brute Force (Splice and Push)

**Steps**:
1. Loop through the array.
2. If you find a `0`:
   - Use `splice()` to remove it.
   - Use `push(0)` to add it at the end.
   - Decrement loop index so the next element is not skipped.

**Why it’s not ideal**:
- Modifying the array while iterating makes it tricky.
- Splice and push are costly operations inside a loop.

**Time Complexity**: Up to `O(n^2)`  
**Space Complexity**: `O(1)`