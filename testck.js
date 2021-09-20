//Bai tap so 1
function allLongestStrings(inputArray) {
    return inputArray.filter((arr1) =>{
      let arrFix = inputArray.filter((newArr) => {
        return newArr !== arr1
      })
        return arrFix.every((arr2) =>{
          return arr1.length >= arr2.length 
        })
    })
}
let a = allLongestStrings([`hung`, `my`, `huyen`, ])
console.log(a)

// Bai tap so 2
function alternatingSums(a) {
    let team1 = a.filter((a1, index) =>{
      return index % 2 == 0
    })
    let team2 = a.filter((a2, index) =>{
      return index % 2 !== 0
    })
    let weight1 = team1.reduce((preUser, currentUser) =>{
      return preUser + currentUser;
    })
    let weight2 = team2.reduce((preUser, currentUser) =>{
      return preUser + currentUser;
    })
    return [weight1, weight2]
}
console.log(alternatingSums([60, 40, 55, 75, 64]))
