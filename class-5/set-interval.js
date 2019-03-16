// this will print a period to the console
// every second
// const x = function() {
//   console.log('.');
//   setTimeout(x, 1000);
// }

// x();

// this is the equivalent of the previous
// code snippet (only using setInterval)
setInterval(function(){
  console.log('.');
}, 1000);

// the difference between setInterval
// and setTimeout is that setTimeout
// runs the callback after certain time
// where setInterval will run the callback
// every certain amount of time.

let i = 0;
const processId = setInterval(function(){
  i++;
  console.log(`Counting: ${i}`);
  if ( i == 10 ) {
    console.log('goodbye');
    clearInterval(processId);
  }
}, 1000);




