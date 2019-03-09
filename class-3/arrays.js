
/**
 * Arrays are lists of elements
 * it can store any kind of data type
 */

const cars = ["kia", "ford"];
console.log( `length of cars is ${cars.length}` );

/**
 * The variable cars is a constant
 * which means that i cannot update the
 * memory space where cars is located.
 * I can however, change the elements inside
 * the array.
 */
console.log( `the first element is ${ cars[0] }` );
cars[0] = 'BMW';
console.log( `the first element is ${ cars[0] }` );

/**
 * Attempting to overwrite the cars variable
 * will result in a program crash
 */
// cars = []; TypeError: Assignment to constant variable.

/**
 * There are built-in functions available
 * inside the array object.
 * 
 * push will append an item to the end of the list.
 */
cars.push("kia");
console.log(cars);

/**
 * pop will remove the last item in the array
 * and return it.
 */
const itemRemoved = cars.pop();
console.log(`${itemRemoved} was removed.`);
console.log(cars);

/**
 * for more information on other functions, please
 * visit
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

 /**
  * Exercise
  */

const second = [];
for(let i = 0; i < 11; i++) {
  seconds.push(i);
}
console.log(`length of second is ${second.length}`);



/**
 * WAYS TO LOOP THROUGH ARRAYS
 */

const letters = ['a', 'b', 'c', 'd'];

// Way #1
for(let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// # Way #2
// by extracting the index
// of the array
for( let index in letters ) {
  console.log( `the index is ${index}` );
}

// # Way #3
// by extracting the element
// itself
for( let letter of letters ) {
  console.log( `the letter is ${letter}` );
}


