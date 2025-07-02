## JavaScript Challenge 4: Two Sum

[Two Sum - LeetCode](https://leetcode.com/problems/two-sum/description/)

**Problem**:  
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

**Example**:  
- Input: `nums = [2,7,11,15], target = 9`  
- Output: `[0,1]`  
- Input: `nums = [3,2,4], target = 6`  
- Output: `[1,2]`

**Concepts**:  
- Array manipulation, hashing.

**Why**:  
This problem helps you practice handling arrays and applying efficient solutions using hashmaps.

## Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
---

## Brute force method plus
1) take first value in interger 
2) add that to next value in interger
3) if equal to target then return two position
4) if not then add 1 to step 2 and repeat until it has gone through all value
5) if value not found then add 1 to step 1 and repeat the rest until value is found 

## Brute force method negative
1) take first value in interger 
2) minus that to target
3) if that value equals next value in interger then return the position
4) if not keep try the next value
5) if value not found then go back to step 1 and try next value
6) return value and return position of starting interger and value interger

## Hash map solution

1) Initialise an empty hash map.
2) Iterate through the array of numbers.
3) For each number, calculate its complement with respect to the target.
4) Check if the complement exists in the hash map.
5) If the complement exists, return the indices of the current number and the complement.
6) If the complement does not exist, add the current number and its index to the hash map.
7)  Repeat steps 3-6 until the target sum is found.

