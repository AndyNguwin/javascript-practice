/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let arr = str.toLowerCase().split(" ").join("").split("");

    for (let x = 0; x < arr.length; x++){
        if (arr[x] != arr[arr.length - 1 - x]) { return false; }
    }
    return true;
    
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};