/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   
};

//  Trim + Split + Pop
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

// Trim + Split + Filter + Last Index
var lengthOfLastWord = function(s) {
    const words = s.trim().split(" ").filter(Boolean);
    return words[words.length - 1].length;
};

// lastIndexOf() + substring()
var lengthOfLastWord = function(s) {
    s = s.trim();
    let lastSpace = s.lastIndexOf(" ");
    return s.substring(lastSpace + 1).length;
};

// Manual Loop
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



// Testing below: 

// var lengthOfLastWord = function(s) {
//     let trimmed = s.trim();
//     console.log("Trimmed:", trimmed);

//     let words = trimmed.split(" ");
//     console.log("Split words:", words);

//     let lastWord = words.pop();
//     console.log("Last word:", lastWord);

//     return lastWord.length;
// };

// var lengthOfLastWord = function(s) {
//     let trimmed = s.trim();
//     console.log("Trimmed:", trimmed);

//     let words = trimmed.split(" ");
//     console.log("Split words:", words);

//     let filtered = words.filter(Boolean);
//     console.log("Filtered words:", filtered);

//     let lastWord = filtered[filtered.length - 1];
//     console.log("Last word:", lastWord);

//     return lastWord.length;
// };

// var lengthOfLastWord = function(s) {
//     s = s.trim();
//     console.log("Trimmed:", s);

//     let lastSpace = s.lastIndexOf(" ");
//     console.log("Last space index:", lastSpace);

//     let lastWord = s.substring(lastSpace + 1);
//     console.log("Last word:", lastWord);

//     return lastWord.length;
// };

// var lengthOfLastWord = function(s) {
//     let length = 0;
//     let i = s.length - 1;

//     console.log("Original string:", s);

//     // Skip trailing spaces
//     while (i >= 0 && s[i] === ' ') {
//         console.log(`Skipping space at index ${i}`);
//         i--;
//     }

//     // Count characters in the last word
//     while (i >= 0 && s[i] !== ' ') {
//         console.log(`Counting letter '${s[i]}' at index ${i}`);
//         length++;
//         i--;
//     }

//     console.log("Final length of last word:", length);
//     return length;
// };


// console.log(lengthOfLastWord("Hello World")); // expected: 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); // expected: 4
