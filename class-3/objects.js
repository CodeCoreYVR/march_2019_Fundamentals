/**
 * Objects can be used to encapsualte
 * information and behavior.
 */

 /**
  * Objects have properties (numberOfDoors and start)
  * each property has a key and value also known
  * as "key/value pair".
  * 
  * In this example we have 4 properties.
  * 2 are characteristics of the object "car"
  * (numberOfDoors and numberOfWheels)
  * and 2 are behaviours (start, accellerate).
  */
const car = {
  numberOfDoors: 5,
  numberOfWheels: 4,
  numberOfFunctioningDoors: 5,
  /**
   * if you define a property with spaces,
   * you will not be able to access it with 
   * the dot notation (eg. car.weird property -> crash)
   */
  'weird property': 'weird value', // DONT -> HORRIBLE
  start: () => {
    console.log('the car is now started');
  },
  accellerate: () => {
    console.log('the car is accellerating now!');
  }
};

// We have the ability to acces properties in two ways.
// one is my using the dot notation (.)
console.log( `My car has ${car.numberOfDoors} number of doors` );

// the second way i can access object properties is
// y using the square brancket ([])
console.log( `My car has ${car['numberOfDoors']} number of doors` );

// i got into an accident, and an idiot hit me from the right side.
console.log( `My car has ${car['numberOfFunctioningDoors']} number of functioning doors` );

car.numberOfFunctioningDoors = 3;

console.log( `My car has ${car['numberOfFunctioningDoors']} number of functioning doors after accident` );
// car['numberOfFunctioningDoors'] = 3 // alternative way to update property

// console is a built in object.
// while log is a method.
// console.log()

// What is a method??????????????????????????????????????
// a method is a function inside an objec.
// hence, log is a method.



const carsArray = ["kia", "ford"];
const people = {
  art: "Jesus Arturo Rodriguez Ravelo",
  duck: "Kaylyn Kwak"
}

for (const car of carsArray ) {
  console.log(car);
}

console.log('----')

for (const i in carsArray ) {
  console.log( carsArray[ i ] );
}
console.log('----')
for ( const nickname in people ) {
  console.log( people[nickname] );
}


const kaylyn = {
  nickname: 'duck',
  firstName: 'Kaylyn',
  lastName: 'Kwak',
  walks: () => {
    console.log('Kaylyn is officially walking!!!');
  }
};

console.log( `${kaylyn.firstName}'s nickname is ${kaylyn.nickname}` );

console.log( kaylyn.walks ); // accesses walks function
kaylyn.walks(); // access it and executes it






