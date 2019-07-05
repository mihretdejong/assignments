

// Sort permanently changes your array
// const myFunction = (arr) => {
// return arr.sort(function(a, b) {return a - b})   
//}
// a and b represent the iteration, a the first one and b the second one
// a and b could be an array or an object or a string
// Sort an array from smallest number to largest

// const leastToGreatest = (arr) => {
//     return arr.sort(function(a, b){return a - b})
// }

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))

//Sort an array from largest number to smallest

// const greatestToLeast = (arr) => {
//     return arr.sort(function(a, b){return b - a})
// }

// console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))


//Sort an array from shortest string to longest

//const lengthSort = (arr) => {
    //     return arr.sort(function(a, b)
    //     {return a.length - b.length})
    
    // }
    
    // console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]))

// Sort an array alphabetically

const alphabetical = (arr) => {
    return arr.sort( (a, b) => {return a > b})
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]))

// 


//Sort the objects in the array by age

// const byAge = (arr) => {
//     return arr.sort(function (a, b) {
//         return a.age - b.age
//     })
// }

// console.log(byAge([
//     {
//         name: "Quiet Samurai",
//         age: 22
//     },
//     {
//         name: "Arrogant Ambassador",
//         age: 100
//     },
//     {
//         name: "Misunderstood Observer",
//         age: 2
//     },
//     {
//         name: "Unlucky Swami",
//         age: 77
//     }
// ]))




