/**
 * Alert
 * 
 * will tell the browser to diplsy
 * a message.
 */

alert('HELLO WORLD');

 /**
 * confirm
 */
const location = confirm('are you at CodeCore?');

if( location ) {
  alert("I'm glad you are at CodeCore");
} else {
  alert("practicing on your own is good too!!!");
}


 /**
 * prompt
 */

 const grade = prompt("What was your grade?");

 if(grade === 'a') {
   alert("congrats!!!!");
 } else {
  alert("I'm sure you are doing well");
 }



