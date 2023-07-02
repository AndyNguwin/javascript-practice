/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    let mid = 0;
    let count = 0;
    let result = "";
    if (str.length % 2 === 0){ mid = str.length/2; } 
    else { mid = (str.length - 1)/2 }
    
    for (const letter of str){
        if (count < mid){ result += letter.toUpperCase(); } 
        else { result += letter.toLowerCase(); }
        count++;
    }

    return result;
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};