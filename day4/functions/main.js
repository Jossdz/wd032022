// function a(){
//   console.log('a')
// }
// let val = 0

// function sum(arr){

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     val += element
//   }

//   return val
// }

// const result = sum([1,2,3])

// console.log(result)


// function a(){
//   console.log('a')
// }

// a()

// const b = function(){
//   console.log('b')
// }

// b()

// const arr = [1,2,3,4]

// arr.forEach(function(number, index){
//  //...
// })

/// Set timeout permite retrasar la ejecucion del codigo dentro del callback
// setTimeout(function(){
//   console.log('Hola a todos')
// }, 1000)

// function eatDinner() {
//   setTimeout(function () {
//     console.log('Eating the dinner!');
//   }, 1000);
// }
 
// function eatDessert() {
//   console.log('Eating the dessert!');
// }
 
// eatDinner();
// eatDessert();
 

// const flavor = prompt('De que su elado joven/werita')


// function obtenerSabor(){
//   return prompt('De que su helado joven/werita')
// }

// function heladeroBarrio(){
//   return prompt('De que la nieve carnal')
// }

// function pedirAmable(cb){
//   let flavor = cb()
//   console.log(`Tenga su helado de ${flavor} buen hombre/werita`)
// }

// function pedirGrosero(cb){
//   let flavor = cb()
//   console.log(`tenga su p@# helado de ${flavor} biejo grosero`)
// }

// pedirAmable(obtenerSabor)

// pedirGrosero(heladeroBarrio)

// const greeting = function (name) {
//   return `Hello, ${name}!`
// };

// const greetingAf = name => `Hello, ${name}!`

// console.log(greeting('a'))

// console.log(greetingAf('b'))

// const user = {
//   name: 'ana',
//   age: 29,
//   a: 'a',
//   getOlder: function () { // Metodo
//     this.age++
//   }
// };

// const user2 = {
//   name: 'Alfonso',
//   age: 29,
//   getOlder: function () { // Metodo
//     user2.age++
//   }
// };

// user.getOlder();

// user2.getOlder();

// // console.log(this)

// console.log(user.age)
// console.log(user2.age)

// const consoleChido = {
//   log: function(){
//     console.log(arguments)
//   },
// }

// consoleChido.log(1, 2, 3, 4, 5, 6, 'u', false)

function r(){
  let sum = 0
  Array.from(arguments).forEach((el) => {
    sum+=el
  })
  return sum
}

console.log(r(1,2,3,4,5,6,7,8,9))