const fruits = ['apple','banana','peach','mango','orange']
const vegetables = ['carrot','tomato','cabbage','cucumber','pumpkin']
fruits.push('gorilla')
const plants = fruits.concat(vegetables)
plants.sort()
console.log(plants)