/**
 * High order functions are functions
 * that can either receive a function
 * or return a function.
 */

const highOrderFunction = function( log, msg ){
  log(msg);
}

highOrderFunction( console.log, "Hi Arturo" );
highOrderFunction( alert, "Hi Arturo" );





const call = function( functionToRun, aParam ){
  return functionToRun( aParam );
}
const doubleIt = function( aNumber ){
  return aNumber * 2;
}
const trippleIt = function( aNumber ) {
  return aNumber * 3;
}
// console.log( doubleIt(3) ); // 6
// console.log( call( doubleIt, 3 ) ); // 6
// console.log( run( trippleIt, 3 ) );
call( doubleIt, 3 );
call( function( aNumber ) {
  return aNumber * 3;
}, 3 );


// how many parameters can we pass to a function?
// answer, as many as it make sense:
function printArturoInfo(firstName, middleName, lastName, secondLastName) {
  console.log(`${firstName} ${middleName} ${lastName} ${secondLastName}`)
}
printArturoInfo("jesus", "arturo", "rodriguez", "ravelo");
printArturoInfo("arturo", "rodriguez", "ravelo", "jesus");



function printPersonObj(person) {
  console.log(`${person.firstName} ${person.middleName} ${person.lastName} ${person.secondLastName}`)
}
arturo = {
  firstName: 'Jesus',
  middleName: 'Arturo',
  lastName: 'Rodriguez',
  secondLastName: 'Ravelo'
}
printArturoObj(arturo);


/**
 * write a function `map` which takes
 * an `array` and a `function`
 * as parameters and returns an array
 * where each item is the item in the
 * original arraywith the function
 * applied to it.
 */
/**
 * write a function `map` which takes
 * an `array` and a `function`
 * as parameters and returns an array
 * where each item is the item in the
 * original arraywith the function
 * applied to it.
 */
const addOne = function(x) {
  return x + 1;
};

// when the program runs map([1, 2, 3], addOne);
// list = [1, 2, 3] and
// funcToProcess = addOne
const map = function(list, funcToProcess) {
  // this will overwrite every item in the list
  for( const index in list ) {
    list[index] = funcToProcess(list[index]);
  }
  return list;
}

// your implementation goes

map([1, 2, 3], addOne); // [ 2, 3, 4 ]





