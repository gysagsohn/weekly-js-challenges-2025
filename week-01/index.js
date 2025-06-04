/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // Step 1: Check if the length of s and goal are the same
    if (s.length !== goal.length){
        return false;
    }

    // Step 2: Concatenate s with itself
    let rotateString = s + s;

    // Step3: Check if goal is a substring of the concatenated string
    if (rotateString.indexOf(goal) >= 0 ) {
        return true;
    }

    // Step 4: If goal is not found in the concatenated string, return false
    return false;
};

// Another way this can be done
var rotateString = function(s, goal) {
    return (s.length === goal.length) && ((s + s).includes(goal));
};
