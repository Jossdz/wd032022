// const car1 = {
//   doors: 4,
//   color: 'blue',
//   windows: 4,
//   seats: 4,
//   tires: 4,
//   isOn: false,
//   turnOn: function(){
//     this.isOn = true
//   }
// }

// const car2 = {
//   doors: 2,
//   color: 'red',
//   color2: 'white',
//   windows: 4,
//   seats: 2,
//   tires: 4,
//   isOn: false,
//   turnOn: function(){
//     this.isOn = true
//   }
// }

// POO

// // Una clase es un tipo de molde/fabrica de objetos de cierto tipo.
// class Car {
//   // constructor nos permite definir los valores iniciales de la clase
//   constructor(color, doors){
//     this.doors = doors
//     this.color = color
//     this.fuel = 0
//     this.isOn = false
//   }

//   turnOn(){
//     this.isOn = true
//   }

//   turnOff(){
//     this.isOn = false
//   }

//   paintCar(color){
//     this.color = color
//   }
// }

// // La forma de fabricar coches es: 
// // Cuando genera un nuevo elemento de una clase, a esto se le conoce como una nueva instancia  de la clase [NOM]
// const car1 = new Car('blue', 4)
// const car2 = new Car('gray', 6)
// const car3 = new Car('white', 2)
// const car4 = new Car()

// car3.paintCar('black')

// car1.turnOn()


// console.log(car1)
// console.log(car2)
// console.log(car3)
// console.log(car4)

class Pokemon {
  constructor(hp, attack, name){
    this.type = 'normal'
    this.hp = hp
    this.attack = attack
    this.name = name
  }

  sayName(){
    console.log(`Hola mi nombre es: ${this.name}`)
  }

  damage(enemyPokemon){
    enemyPokemon.hp -= this.attack
  }
}

class FirePokemon extends Pokemon {
  constructor(hp, attack, name){
    // Super es una forma de hacer llegar valores a la clase padre, para que las propiedades se hereden correctamente
    super(hp, attack, name)
    this.type = 'fire'
  }
  
  damage(enemyPokemon){
    if(enemyPokemon.type === 'plant') {
      enemyPokemon.hp -= this.attack * 2
    }else{
      enemyPokemon.hp -= this.attack
    }
  }
}

class WaterPokemon extends Pokemon {
  constructor(hp, attack, name){
    super(hp, attack, name)
    this.type
  }
  
  damage(enemyPokemon){
    if(enemyPokemon.type === 'fire'){
      enemyPokemon.hp -= this.attack * 2
    }else{
      enemyPokemon.hp -= this.attack
    }
  }
}


const rata = new Pokemon(40, 4, 'ratatta', 'normal')
const charizard = new FirePokemon(50, 9, 'Charizard')
const blastoise = new WaterPokemon(60, 7, 'Blastoise')

console.log('Vida de la blastoise:', blastoise.hp, 'Vida del quema ratas', charizard.hp)

charizard.damage(blastoise)

console.log('Vida de la blastoise:', blastoise.hp, 'Vida del quema ratas', charizard.hp)

blastoise.damage(charizard)


console.log('Vida de la blastoise:', blastoise.hp, 'Vida del quema ratas', charizard.hp)