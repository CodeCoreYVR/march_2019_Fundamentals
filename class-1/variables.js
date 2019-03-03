/**
 * VARIABLE SYNTAX:
 * 
 * {keyword} {variable-name} {assignment-operator} {value}
 * 
 * the "keyword" dictates which type of variable
 * we are dealing with and the scope.
 * "scope" is the area ub which a variable is avbailable.
 * 
 * Valid values for variable keyword:
 *    -> "let" tells the program that the variable
 *      is mutable (can change)
 *    -> "const" tells the program that the variable
 *      is inmutable (cannot change)
 *    -> "var" is like "let" but its availability
 *      goes to the parent scope.
 */
/**
 * All these variables are delcared
 * and initialuzed in the global scope.
 */
/**
 * All these variables are delcared
 * and initialuzed in the global scope.
 */
const myFirstNumber = 36;
/**
 * In the previous likewe are performing
 * 2 operations:
 * 
 *    -> Variable declaration. Tel;ls
 */

let myFirstString = "Jesus Rodriguez";
var myFirstCar = "Kia Soul";

console.log( myFirstNumber );
console.log( myFirstString );
console.log( myFirstCar );
// this will crash the program
// because the variabl is a constant
// TypeError: Assignment to constant variable.
// myFirstNumber = 37;

myFirstCar = "Another kia";
console.log( myFirstCar );

/**
 * SCOPE
 * 
 * const and let, will make variables
 * live only wihin their corresponding
 * curly brackets
 */
const car = "Kia";
console.log(`In the global scope car is ${car}`);
{
  var age = 36;
  const bike = "Kawasaki";
  console.log(`In the local scope bike is ${bike}`);
  console.log(`In the local scope car is ${car}`);
  console.log(` Arturo is ${age} years p;d `);
}
/**
 * bike lives only within the
 * curly brackets. that is its scope.
 */
// console.log(bike);
console.log(` Arturo is ${age} years p;d `);
console.log(`bike is not available in the global scope`);
console.log(`In the global scope car is ${car}`);



