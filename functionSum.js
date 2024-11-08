function summa(n1, n2, n3) {
    return n1 + n2 + n3
}

// console.log(summa(76,24,50))


function plus(...params) {
    return params[4]
}
// console.log(plus(3, 56, 45, 657, 5))


function lol(...params) {
    let num = 0
    for (i of params) {
        num = i + num
 
   }
   return num 
}
console.log(lol(1,2,3,45,7,24,57,8,5,3,7,2,6,4,6,3,6,3,5,6,4,6,4,3,4))