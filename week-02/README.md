## JavaScript Challenge 2: Length of Last Word

**Problem**:  
Given a string `s` consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.

**Example**:  
- Input: `s = "Hello World"`  
- Output: `5`  
- Input: `s = "   fly me   to   the moon  "`  
- Output: `4`

**Concepts**:  
- String manipulation, trimming, finding the last word.

**Why**:  
This challenge reinforces your understanding of basic string operations, such as trimming and splitting.

### 🧠 My Thought Process

1. There might be extra spaces at the end — so trim the string first.  
2. I need to find the last word — which may not be the last character.  
3. There are different ways to get the last word:
   - Using `.split()` and `.pop()`
   - Using `.filter()` to remove empty strings
   - Using `.lastIndexOf()` and `.substring()`  
   - Manually looping backwards
4. Once I have the last word, I count the characters and return that.

---

## Solutions I Explored

---

### 1. Trim + Split + Pop

```js
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};
```

Explanation:

``` js 
.trim() //removes trailing and leading whitespace


.split(" ") // breaks the string into an array

.pop() // grabs the last item in the array

.length// gives you the length of that word

``` 

### 2 Trim + Split + Filter + Index
``` JS
var lengthOfLastWord = function(s) {
    const words = s.trim().split(" ").filter(Boolean);
    return words[words.length - 1].length;
};
```
Explanation:
``` JS
.filter(Boolean) // removes empty strings from multiple spaces

words.length - 1 // gets the last word (arrays are 0-indexed)

.length  // gives the character count
```
### 3. lastIndexOf + substring
``` JS
var lengthOfLastWord = function(s) {
    s = s.trim();
    let lastSpace = s.lastIndexOf(" ");
    return s.substring(lastSpace + 1).length;
};
```

Explanation:

``` JS
lastIndexOf(" ") // finds the position of the last space

substring(lastSpace + 1) // gives the final word

.length // gets the count
``` 

### 4  Manual Loop
``` JS
var lengthOfLastWord = function(s) {
    let length = 0;
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') i--;

    // Count characters in the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};
```

Explanation:

Walks from the end of the string

First skips spaces

Then counts non-space characters until it hits a space

Doesn’t use any helper methods — just raw logic