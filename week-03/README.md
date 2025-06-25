## JavaScript Challenge 3: Matrix Diagonal Sum

[Matrix Diagonal Sum - LeetCode](https://leetcode.com/problems/matrix-diagonal-sum/)

**Problem**:  
Given a square matrix `mat`, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

**Example**:  
- Input: `mat = [[1,2,3], [4,5,6], [7,8,9]]`  
- Output: `25`

**Concepts**:  
- Matrix manipulation, diagonal traversal.

**Why**:  
This helps you practice matrix operations, particularly when working with multi-dimensional arrays.

---

## Solutions

**Brut Force**
**Step 1: Check Matrix Length**
- Determine if the matrix length `n` is **odd** or **even**.
- If it's odd, there will be a **center element** shared by both diagonals.
- That center value should only be counted **once**.

**Step 2: Traverse the Primary Diagonal**
- Start at the top-left corner `mat[0][0]`.
- For each row `i`, access `mat[i][i]`.
- This gives you the primary diagonal: top-left → bottom-right.

**Step 3: Traverse the Secondary Diagonal**
- Start at the top-right corner `mat[0][n - 1]`.
- For each row `i`, access `mat[i][n - 1 - i]`.
- If the matrix is **odd** and the current index `i === n - 1 - i`, it's the **center element**, so skip it to avoid double-counting.

**Step 4: Add the Values**
- Sum all values from the primary diagonal.
- Add the non-overlapping values from the secondary diagonal.

**Step 5: Return the Result**
- Return the final sum after handling the center overlap (if any).