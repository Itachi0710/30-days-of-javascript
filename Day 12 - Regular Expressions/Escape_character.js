let pattern = /\d/g  
let txt = 'This regular expression example was made in January 01,  2023.'
let matches = txt. match(pattern)

console.log(matches)  // ["0", "1", "2", "0", "2", "3"]


pattern = /\d+/g
matches = txt. match(pattern)
console.log(matches)  // ["01", "2023"]




































































