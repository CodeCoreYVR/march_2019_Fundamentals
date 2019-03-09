/**
 * What is a function?
 * a function is a way of grouping instructions.
 * 
 * the syntax for a function is as follows:
 * 
 * {CONST-LET-VAR} {FUNCTION-NAME} = function () {}
 * {CONST-LET-VAR} {FUNCTION-NAME} = () => {}
 * function {FUNCTION-NAME} () {}
 */


 /**
  * PARAMETER.
  * The variables in the parentesis are called "parameters".
  * that is how you pass values into the function.
  * 
  * RETURN.
  * A function may or may not return a value.
  * This is optional and depends on the design
  * of the function.
  * 
  * DEFINITION vs EXECUTION
  * the following only DEFINES the addTwoNumbers function
  * in order to EXECUTE it you need to do as follows:
  * 
  *  addTwoNumbers(3, 3); // this will return 6
  * 
  * the parentheses is called a function signature.
  * the order of the parameters matter.
  */
const addTwoNumbers = (numberA, numberB) => {
  console.log(`calculating ${numberA} + ${numberB}`);
  const result = numberA + numberB;
  return result;
}

// in this case, 3 is going to be assigned to numberA
// and 6 is going to be assigned to numberB
const result1 = addTwoNumbers( 3, 6 );
const result2 = addTwoNumbers(3, 4);

console.log(`result1 = ${result1}`);
console.log(`result2 = ${result2}`);









