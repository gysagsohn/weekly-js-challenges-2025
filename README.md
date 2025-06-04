# Weekly JS Challenges – 2025

![Author](https://img.shields.io/badge/author-gysagsohn-lightgrey)
![Current Week](https://img.shields.io/badge/challenge-week%201-blue)
![Commit Frequency](https://img.shields.io/badge/commits-weekly-green)
![License](https://img.shields.io/badge/license-MIT-green)

Welcome to my weekly JavaScript challenge log.  
Each week, I’ll tackle a new challenge, document my thought process, and track my growth.

Each challenge includes:
- A description of the problem
- My solution (`index.js`)
- Key concepts and edge cases

---

## Weekly Challenges

### 1. Rotate String
**Problem:** Return `true` if `s` can become `goal` by rotating the string.
- `"abcde", "cdeab"` → `true`
- `"abcde", "abced"` → `false`

**Concepts:** String manipulation, rotations

---

### 2. Length of Last Word
**Problem:** Return the length of the last word in a string.
- `"Hello World"` → `5`
- `"   fly me   to   the moon  "` → `4`

**Concepts:** Trimming, splitting strings

---

### 3. Matrix Diagonal Sum
**Problem:** Return the sum of both diagonals in a square matrix (no double-counting).
- `[[1,2,3],[4,5,6],[7,8,9]]` → `25`

**Concepts:** 2D arrays, diagonal traversal

---

### 4. Two Sum
**Problem:** Return indices of two numbers that sum to a target.
- `[2,7,11,15], target = 9` → `[0,1]`

**Concepts:** Hashmaps, array traversal

---

### 5. Power of Two
**Problem:** Return `true` if a number is a power of two.
- `n = 16` → `true`

**Concepts:** Bitwise operations, number patterns

---

### 6. Move Zeroes
**Problem:** Move all 0s to the end of an array in-place.
- `[0,1,0,3,12]` → `[1,3,12,0,0]`

**Concepts:** In-place array manipulation

---

### 7. Pascal's Triangle
**Problem:** Generate the first `numRows` of Pascal’s Triangle.
- `5` → `[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]`

**Concepts:** Dynamic programming, nested arrays

---

### 8. Valid Anagram
**Problem:** Return `true` if two strings are anagrams.
- `"anagram", "nagaram"` → `true`
- `"rat", "car"` → `false`

**Concepts:** Hashmaps, frequency comparison

---

### 9. Excel Sheet Column Title
**Problem:** Convert a number to Excel-style column (e.g. 1 → A, 28 → AB)

**Concepts:** Base-26 conversion, char code math

---

### 10. First Bad Version
**Problem:** Use `isBadVersion(version)` to find the first bad version with minimal calls.
- `n = 5, bad = 4` → `4`

**Concepts:** Binary search, optimization

---

## Weekly Workflow

To create a new challenge folder using the template (From the root of the repo, run):

``` bash
./new-week.sh [WEEK_NUMBER]
```

``` bash
#!/bin/bash

# Check if a week number was provided (e.g. ./new-week.sh 3)
if [ -z "$1" ]; then
  echo "❌ Please provide a week number. Example: ./new-week.sh 03"
  exit 1
fi

# Format the week number as two digits(e.g. 3 → 03)
WEEK_NUM=$(printf "%02d" $1)
FOLDER_NAME="week-$WEEK_NUM"

# Check if the folder already exists
if [ -d "$FOLDER_NAME" ]; then
  echo "❗ $FOLDER_NAME already exists."
else
  # If not, copy the template folder and create a new weekly folder
  cp -r challenge-template "$FOLDER_NAME"
  echo "✅ Created $FOLDER_NAME from template."
fi
```


