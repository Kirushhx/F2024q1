function arrayMadness(firstArray, secondArray) {
    return firstArray.reduce((acc, element) => acc + element**2, 0) > secondArray.reduce((acc,element)=> acc+element**3,0)
}


console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]))