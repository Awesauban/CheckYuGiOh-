
//  2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of 
// numbers from 1 to n and replaces multiples of 2, 3, 
// and 5 with "yu", "gi" and "oh", then returns the resulting array.

// Note:

// - for numbers that have multiple factors, use hyphens as separators
// e.g 10 === "yu-oh", 30 === "yu-gi-oh"
// - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that 
// can't be converted to a number or another data type - is passed. 
// Use the following cases as guides:

// - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
// - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`


function checkYuGiOh(n) {
    const number = [n]
    if (n === " ") {
        return ("invalid parameter: ${n}");
    } else if (n === 30) {
        return ("yu-gi-oh");
    } else if (n === 10) {
        return ("yu-oh");
    } else if (n === 5) {
        return ("oh")
    } else if (n === 2) {
        return ("yu");
    } else if (n === 3) {
        return ("gi")
    } else if (n === 15) {
        return ("gi-oh")
    } else if (n === 6) {
        return ("yu-gi");
    } else if (n !== 30, 10, 5, 2, 3, 15, 6) {
        return ("invalid parameter: ${number}");
    } else  {
        return(n)
    }
    console.log(checkYuGiOh)

}