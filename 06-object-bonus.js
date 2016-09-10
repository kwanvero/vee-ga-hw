/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have.
// Answer Starts Here

    // 'ToDo'
    // Description: Managing To Do Items.
    // Every 'ToDo' has
    // - a title
    // - a start time / date
    // - an end time / date
    // - a description
    // Every 'ToDo' can
    // - be created
    // - be completed
    // - be uncompleted
    // - be deleted
    //
    // 'Days'
    // Description: Managing Days.
    // Every 'Day' has
    // - ToDos
    // - a time line
    // Every 'Day' can
    // - alert a ToDo
    //
    // 'Calendar'
    // Description: Managing the Calendar iteself.
    // Every 'Calendar' has
    // - Months
    // - Weeks
    // - Days
    // Every 'Calendar' can
    // - preview future Todo
    // - view past Todo


// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

// Answer Starts Here
  let pet_owner = {
    name: 'Bruce Wayne',
    address: '1007 Mountain Drive, Gotham'
  }

// Answer Ends Here

// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

// Answer Starts Here
let pet = {
  name: 'Scooby-Doo',
  species: 'dog',
  breed: 'Great Dane',
  noise: ['meaow', 'rooo-be-do-be-doooo', `What does the fox say?`],
  makeNoise () {
    switch (this.species) {
      case 'cat':
        console.log(this.noise[0])
        break
      case 'dog':
        console.log(this.noise[1])
        break
      default:
        console.log(this.noise[2])
    }
  }
}

console.log(pet.makeNoise())
// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

// Answer Starts Here
class pet{
  constructor(petName, species, breed){
    this.petName = petName
    this.species = species
    this.breed = breed
  }

  makeNoise () {
      let noise = ``
      switch (this.species) {
        case 'cat':
          noise = `meaow`
          break
        case 'dog':
          noise = `ruh-roh`
          break
        default:
          noise = `What does ths fox say?`
      }
    this.noise = noise
    console.log(`${this.petName} says "${this.noise}!", which means "Uh-oh..."`);
  }

}

let Astro = new pet('Astro', 'dog', 'Great Dane')

Astro.makeNoise()

// Answer Ends Here
