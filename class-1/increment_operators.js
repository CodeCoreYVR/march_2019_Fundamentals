

/**
 * Post incrementor will increase the value
 * in the variable after it being accessed.
 * 
 * Pre-incrementor will increase the value
 * before it being accessed
 */

 let age = 36;

console.log(`age is ${age} after defined`);
console.log(`age is ${age++} with post incrementor`);
console.log(`age is ${age} after post incrementor`);
console.log(`age is ${++age} with pre incrementor`);

/**
 * POST INCREMENT OPERATOR STEPS IN LINE 14:
 * 
 * 1) Grabs value of age
 * 2) parses string
 * 3) prints to console
 * 4) increments value
 * 5) stores in memory
 * 
 * PRE INCREMENT OPERATOR STEPS IN LINE 16
 * 
 * 1) grabs value
 * 2) increments value
 * 3) parses string
 * 4) prints to console
 * 5) stores in memory
 */
console.log(`age is ${age} after defined`);
console.log(`age is ${age--} with post incrementor`);
console.log(`age is ${age} after post incrementor`);
console.log(`age is ${--age} with pre incrementor`);

/**
 * An alternative to incrementing values is by
 * using += and -=
 */
console.log(`age is ${age} after defined`);
console.log(`age is ${ age -= 1} with post incrementor`);

/**
 * STEPS IN LINE 45
 * 
 * 1) grabs value of age
 * 2) decreases value
 * 3) stores in memory
 * 4) parses string
 * 5) prints to console
 */



