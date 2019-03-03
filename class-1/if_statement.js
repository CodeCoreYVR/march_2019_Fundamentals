/**
 * The if statement is for
 * flow control purposes
 */

const grade = 'a';

if( grade === 'a') {
  console.log('You are a bit of a nerd, aren\'nt you?');
} else if( grade === 'b' || grade === 'b-') {
  console.log('B is still nice');
} else {
  console.log('You are still pretty good');
}

console.log('Bye bye');


const age = 37;

if( age < 36) {
  console.log('Damn!!!')
} else {
  console.log('how old then?')
}


const grade = 'b';

// // try to avoid doing this
// if( grade == 'a' ) {
//   console.log('congrats you\'ve got a')
// } else {
//   if( grade == 'b' ) {
//     console.log('congrats you\'ve got b')
//   }
// }
if( grade == 'a' ) {
  console.log('congrats you\'ve got a')
} else if( grade == 'b' ) {
    console.log('congrats you\'ve got b')
  }
}