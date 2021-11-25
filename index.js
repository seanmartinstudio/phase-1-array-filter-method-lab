
//1 Before Refactor
// function findMatching(array, string) {
//     let newArray = []
//     for(let item of array) {
//         if (item.toLowerCase() === string.toLowerCase()) {
//             newArray.push(item)
//         }
//     }
//     return newArray
// }


// //1
// function findMatching(array, string) {
//     function itemFunction (item) {
//         return item.toLowerCase() === string.toLowerCase()
//     }
//     return array.filter(itemFunction)
//   }







  //1
function findMatching(array, string) {
  return array.filter (item => item.toLowerCase() === string.toLowerCase())
}

  //2
function fuzzyMatch(array, string) {
return array.filter (item => item.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

//3
function matchName(array, string) {
return array.filter (item => item.name.toLowerCase() === string.toLowerCase())
}
