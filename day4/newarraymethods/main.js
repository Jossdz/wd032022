// const nums = [1,2,3,4]
// // const nums3 = []

// // const feresult = nums.forEach((num, index) => {
// //   nums3[index] = num * 2
// // })

// // console.log(feresult)

// const nums2 = nums.map((num) => {
//   return num *2
// })

// console.log('arreglo original:', nums, "arreglo modificado:", nums2)

// const students = ['Ari', 'Sam', 'Alberto']

// // const hiStudents = []

// // students.forEach((student) => {
// //   hiStudents.push('Hola ' + student)
// // })

// // console.log(students, hiStudents)

// const hiStudents2 = students.map(student =>  `Hola ${student}`)

// console.log(students, hiStudents2)

// array of cities:
// const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

// const capsCities = cities.map(city => city.toUpperCase())

// console.log(capsCities);

// const students = [
//   {
//     name: 'Tony Parker',
//     firstProject: 80,
//     secondProject: 75,
//     finalExam: 90
//   },
//   {
//     name: 'Marc Barchini',
//     firstProject: 84,
//     secondProject: 65,
//     finalExam: 65
//   },
//   {
//     name: 'Claudia Lopez',
//     firstProject: 45,
//     secondProject: 95,
//     finalExam: 99
//   },
//   {
//     name: 'Alvaro Briattore',
//     firstProject: 82,
//     secondProject: 92,
//     finalExam: 70
//   },
//   {
//     name: 'Isabel Ortega',
//     firstProject: 90,
//     secondProject: 32,
//     finalExam: 85
//   },
//   {
//     name: 'Francisco Martinez',
//     firstProject: 90,
//     secondProject: 55,
//     finalExam: 78
//   },
//   {
//     name: 'Jorge Carrillo',
//     firstProject: 83,
//     secondProject: 77,
//     finalExam: 90
//   },
//   {
//     name: 'Miguel López',
//     firstProject: 80,
//     secondProject: 75,
//     finalExam: 75
//   },
//   {
//     name: 'Carolina Perez',
//     firstProject: 85,
//     secondProject: 72,
//     finalExam: 67
//   },
//   {
//     name: 'Ruben Pardo',
//     firstProject: 89,
//     secondProject: 72,
//     finalExam: 65
//   }
// ];


// const finalGrades = students.map(student => {
//   // Necesitamos sacar el promedio de los 2 proyectos
//   const avg = (student.firstProject + student.secondProject) / 2
//   // calcular la evaluacion final proyecto = 40%, examen 60%
//   const exam = student.finalExam * 0.6
//   const finalProyect = avg * 0.4
//   const finalGrade = exam + finalProyect
//   // devolver un objeto con la siguiente forma { name: 'sss', finalGrade: n}

//   return {
//     name: student.name,
//     finalGrade
//   }
// })

// console.log(finalGrades);

// const arr = [1,2,3,4,5,6,7,8,9,10]

// const sum = arr.reduce(
//   (accumulator, currentValue) =>  {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue},
//   5
//   )
// // const sum = arr.reduce((accumulator, currentValue) => {
// //   console.log(accumulator, currentValue)
// //   return accumulator + currentValue
// // })

// let subs = 5

// arr.forEach(num => {
//   subs += num
// })


// console.log(sum);

// console.log(subs)

// const people = [
//   { name: 'Candice', age: 25 },
//   { name: 'Tammy', age: 30 },
//   { name: 'Allen', age: 49 },
//   { name: 'Nettie', age: 21 },
//   { name: 'Stuart', age: 17 }
// ];

// const ages = people.reduce((acc, person) => acc + person.age, 0)

// console.log(ages)

// const menu = [
//   { name: 'Carrots', calories: 150 },
//   { name: 'Steak', calories: 350 },
//   { name: 'Broccoli', calories: 120 },
//   { name: 'Chicken', calories: 250 },
//   { name: 'Pizza', calories: 520 }
// ];

// // your code:

// const averageCalories = menu.reduce((acc, current) => current.calories + acc, 0) / menu.length

// console.log(averageCalories); // 278


// const product = {
//   name: 'AmazonBasics Apple Certified Lightning to USB Cable',
//   price: 7.99,
//   manufacturer: 'Amazon',
//   reviews: [
//     { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
//     { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
//     { user: 'David Recoba', comments: 'Awesome', rate: 5 },
//     { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
//     { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
//   ]
// };

// const avgRate = product.reviews.reduce((acc, current) => current.rate + acc, 0) / product.reviews.length

// console.log(avgRate)

// const arr = [1,2,3,null,4,5,6]

// const is3 = (num) => num === 3

// const numsM2 = arr.filter(num => {
//   return num
// })

// console.log(numsM2);

// const people = [
//   { name: 'Candice', age: 25 },
//   { name: 'Tammy', age: 30 },
//   { name: 'Allen', age: 20 },
//   { name: 'Nettie', age: 21 },
//   { name: 'Stuart', age: 17 },
//   { name: 'Bill', age: 19 }
// ];
 
// const ofDrinkingAge = people.filter(person => !(person.age >= 21))

// console.log(ofDrinkingAge);

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: 'Private Room',
    pool: true,
    garage: false
  },
  {
    title: 'Private apartment',
    price: 190,
    type: 'Entire Place',
    pool: true,
    garage: true
  },
  {
    title: 'Apartment with awesome views',
    price: 400,
    type: 'Entire Place',
    pool: false,
    garage: false
  },
  {
    title: 'Apartment in la Rambla',
    price: 150,
    type: 'Private Room',
    pool: false,
    garage: true
  },
  {
    title: 'Comfortable place in Barcelona´s center',
    price: 390,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'Room near Sagrada Familia',
    price: 170,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: 'Great house next to Camp Nou',
    price: 140,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'New apartment with 2 beds',
    price: 2000,
    type: 'Entire place',
    pool: false,
    garage: true
  },
  {
    title: 'Awesome Suite',
    price: 230,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: 'Entire place',
    pool: true,
    garage: true
  }
];

const withPool = places.filter(place => place.pool)

console.log(withPool);
