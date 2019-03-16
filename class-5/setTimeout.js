/**
 * setTimeout is a higher order function
 * that takes 2 parameters, a `function`
 * and a number of milliseconds.
 */

// this will print out right away
console.log('Program starting');

// this will run the anonymous function
// after 3 seconds
setTimeout( function(){
  console.log('Hello world (after 3 seconds)');
}, 3000 );

// this will print out right away
console.log('Program ending');


// setTimeout always returns an identifier
// that you can use to kill the process.
// we are creating a process so that
// a function runs after 3 seconds
// we receive the process identifier
// and store in the `processId` variable
const processId = setTimeout( function(){
  console.log('Hello world (after 3 seconds)');
}, 3000 );
// we print a message about the process
console.log(`the process id is ${processId}`);

// then we kill it before the 3 seconds
clearTimeout(processId);

// we print a final message
console.log(`we killed the process before it finished`);


const x = function() {
  console.log('.');
  setTimeout(x, 1000);
}

x();






