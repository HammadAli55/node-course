const validation = require('validator')

isEmailTrue = validation.isEmail('hammadalii@outlook.com')
isURLTrue = validation.isURL('www.google.co.uk')

// argv - argument vector 
console.log(process.argv)

console.log(isURLTrue)