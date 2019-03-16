function five() {
  var a = 5;
  return a;
}

// ReferenceError: a is not defined
// console.log(a);

// one solution
// is to call five and print out
// what the function returns
console.log(five());



function bark (){return 'woof'};
let puppy = {
  name: 'pumpkin',
  bark: bark
}

console.log( puppy.name );
console.log( puppy.bark );
console.log( puppy.bark() );




function func () {
  if( true ) {
    const name = 'arturo';
    let age = 36;
    var test = 'test';
    console.log('inside', name, age, test);
  }
  console.log('outside', test );
}
func();
// console.log('outside', test );







