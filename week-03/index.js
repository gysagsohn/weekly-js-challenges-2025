/**
 * @param {number[][]} mat
 * @return {number}
 */
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let n = mat.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        // Add primary diagonal
        sum += mat[i][i];

        // Add secondary diagonal, but skip if it's the same as primary (center of matrix)
        if (i !== n - 1 - i) {
            sum += mat[i][n - 1 - i];
        }
    }

    return sum;
};

// Test
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // 25
console.log(diagonalSum([[5]])); // 5
console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])); // 8