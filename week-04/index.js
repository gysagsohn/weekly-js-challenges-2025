/**
 * JavaScript Challenge 4: Two Sum
 *
 * Problem:
 * Given an array of integers `nums` and an integer `target`,
 * return indices of the two numbers such that they add up to `target`.
 *
 * You may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1] because nums[0] + nums[1] === 9
 */

/* 
Brute Force Method – Version 1: Direct Addition
-----------------------------------------------
Step 1: Start with the first number
Step 2: Add it to every number that comes after
Step 3: If the sum equals the target, return the indices
Step 4: If not, move to the next starting number and repeat
Step 5: Continue until the correct pair is found
*/

function twoSumBruteForceAdd(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

/* 
Brute Force Method – Version 2: Target Minus Current Value
-----------------------------------------------------------
Step 1: Take the first number
Step 2: Subtract it from the target
Step 3: Check if the result exists later in the array
Step 4: If so, return the current index and that number's index
Step 5: Repeat until match is found
*/

function twoSumBruteForceSubtract(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target - nums[i] === nums[j]) {
                return [i, j];
            }
        }
    }
    return [];
}

// ## Hash map solution

// 1. Initialise an empty Map
// 2. Loop through the array
// 3. For each number, compute the complement: target - current number
// 4. Check if complement exists in the map
//    - If yes, return [index of complement, current index]
// 5. If not, store the current number and index in the map
// 6. Continue until a match is found

function twoSumHashMap(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}



// Test Cases
console.log("=== Brute Force: Add ===");
console.log(twoSumBruteForceAdd([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumBruteForceAdd([3, 2, 4], 6));      // [1, 2]
console.log(twoSumBruteForceAdd([3, 3], 6));         // [0, 1]

console.log("\n=== Brute Force: Subtract ===");
console.log(twoSumBruteForceSubtract([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumBruteForceSubtract([3, 2, 4], 6));      // [1, 2]
console.log(twoSumBruteForceSubtract([3, 3], 6));         // [0, 1]

console.log(twoSumHashMap([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumHashMap([3, 2, 4], 6));      // [1, 2]
console.log(twoSumHashMap([3, 3], 6));         // [0, 1]