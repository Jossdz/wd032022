// alert("Connected")


//            👇 Parametros
function sum(n1, n2){
  console.log(n1 + n2)
}

// 👇 Argumentos
sum(3, 5)
sum(20, 30)

sum("Hola", " mundo")


function sayHi(name){
  if(name){
    console.log(`Hi, ${name}!`)
  }else{
    console.log('Hi there!')
  }
}

sayHi()

const a = sayHi()

console.log(typeof a)

function sum2(n1, n2){
  if(typeof n1 === 'string' || typeof n2 === 'string'){
    return "Suma invalida"
  }else{
    return n1 + n2
  }
}

sum2(1, 2)


const n = 1 + 2


const n2 = 1 + sum2(4, 4)



console.log(`Hola soy pancho y tengo ${sum2(2, 4)} años programando`)

const invalid = sum2('2', '5')


const selectedFlavor = 'fresa'

function getIceCream(flavor){
  switch (flavor) {
    case 'fresa':
      return 'Helado de fresa'
    case 'chocolate':
      return 'Helado de chocolate'
    case 'napolitano':
      return 'Helado de napolitano'
    default:
      return 'Helado de nada'
  }
}

console.log(getIceCream(selectedFlavor))