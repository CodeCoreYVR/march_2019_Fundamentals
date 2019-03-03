/**
 * Strings are a sequence of
 * characters. The program
 * recognizes a string because
 * they are wrapped around
 * double quotes, single quotes,
 * or backticks
 */

// strings using double quotes
"Jesus Arturo Rodriguez Ravelo";

// strings using single quotes
'Hola!!!';

// strings using backticks
`Sup?`;

// the backslash character is a
// escape character. It tells
// the program that the character
// that follows, must exist within
// the string.
'Hi, I\'m Arturo';
".. and then she said \"Hi\"";

// in this case, the \n is interpreted
// by the browser as a new line
// here you can find other escaped characters
// https://www.freeformatter.com/javascript-escape.html
'Hi, I\'m Arturo\nand my last name is Rodriguez';

/**
 * CONCATENATION
 * 
 * This is the process of merging
 * multiple strings
 */
console.log( "Hello there!!!!! " + " My name is Arturo" );

// Crashes your program
// console,.log('A' + 3);
// console,.log(5 + 'B');

/**
 * INTERPOLATION
 * 
 * This is when you mix text with expressions
 * that will be executed by the js engine.
 */
console.log( `2 + 2 equals ${2 + 2}` );

/**
 * .length will compute the size
 * of the string
 */
console.log("Hello World".length); // this produces 11

/**
 * With square brackets
 * you can access a single
 * character in the string
 */
console.log( "Arturo"[0] );

/**
 * With string, you cannot replace
 * a character using the square
 * brackets.
 */
const s = "hobbi";
s[4] = "y"
console.log(s)

/**
 * typeof will tell you the data type of a value
 */
console.log( typeof("hello") );
console.log( typeof("345") );
console.log( typeof(345) );

/**
 * parseInt will turn a value into a number data type
 */
console.log( typeof( parseInt("345") ) );

/**
 * Create a string "Hello, [Your name]!" by concatenanting
 * 3 strings
 * 
 * compute the length
 */

 console.log("Hellom, " + "Arturo" + "!");
 console.log( ("Hellom, " + "Arturo" + "!").length );