// const arrayNames = ['Pedro', 'Jake', 'Joan', 'Mike'];

// // arrayNames.unshift('Rachel')
// arrayNames.push('Rachel')

// console.log(arrayNames[1])

// console.log(arrayNames)

// // arrayNames.splice(1,2)

// console.log(arrayNames)

// console.log(arrayNames.length);

// // for(let i = 0; i < arrayNames.length; i++){
// //   console.log(`Hi ${arrayNames[i]}`)
// // }

// // forEach es un metodo de todo arreglo, que permite iterar mas facil sobre cada elemento del array
// // Necesitamos pasar una funcion cuyo primer parametro es el elemento que se esta iterando como argumento del forEach.
// //                  👇
// arrayNames.forEach(function(name){
//     console.log(`Hi ${name}`)
// })

// // el bloque de codigo de la funcion anonima es lo que se va ejecutar por cada uno de los elementos del array.


// const arr = ["34534", "werte"]



// arr.forEach(function(element, index){
//   console.log('elemento iterando:',element, 'este es su index', index)
//   console.log(`Hay ${index + 1} elementos`)
// })


// let phrase = "This is long enough for a string to count it words";


// let words = phrase.split(' ')


// // console.log(words.length)

const students = [
  {
    name: 'Yani',
    attended: true
  },
  {
    name: 'Sam',
    attended: false
  },
  {
    name: 'Esteban',
    attended: true
  },
]

// students.att
// students[0].att

students.forEach(function(person){
  if(person.attended){
    console.log(`${person.name} Asistio a clase`)
  }
})