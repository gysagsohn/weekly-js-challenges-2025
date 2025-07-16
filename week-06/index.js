// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

// Solution 1: Two Pointers (Swap Method)
function moveZeroesSwap(nums) {
  // Pointer to track the last non-zero index
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    // If the current element is non-zero, swap with the leftmost zero
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt] = temp;
      lastNonZeroFoundAt++;
    }
  }
}

// Solution 2: Two Pointers (Overwrite + Fill)
function moveZeroesOverwrite(nums) {
  let pos = 0;

  // Move non-zeros to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  // Fill the rest with 0s
  while (pos < nums.length) {
    nums[pos] = 0;
    pos++;
  }
}

// 🧪 Test
let nums1 = [0, 1, 0, 3, 12];
let nums2 = [0, 1, 0, 3, 12];

console.log("=== Solution 1: Swap Method ===");
moveZeroesSwap(nums1);
console.log(nums1); // [1, 3, 12, 0, 0]

console.log("\n=== Solution 2: Overwrite + Fill ===");
moveZeroesOverwrite(nums2);
console.log(nums2); // [1, 3, 12, 0, 0]
