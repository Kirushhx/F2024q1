const arrayNum=[1,2,3,4]
const emptyArray = []
for(i of arrayNum){
    emptyArray.push(i+10)
    // console.log(`смотрим ${i}`)
}

//console.log(emptyArray)

function summaChisel(arrayNumbers){
    const arrayEmpty = []
for(i of arrayNumbers)
    arrayEmpty.push(i+20)
    return arrayEmpty

}
console.log(summaChisel(arrayNum))