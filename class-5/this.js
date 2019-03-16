const obj = {
  a: 2,
  b: 'B',
  touchThis: function() {
    return this;
  }
};

/**
 * obj is the same thing
 * as this. the keyword "this"
 * references the object itself.
 */
console.log(obj);
console.log( obj.touchThis() );


const car = {
  speed: 260,
  park: function(){
    console.log('Parking!');
  },
  stop: function(){
    console.log('Stopping!');
  },
  accelerate: function(){
    /**
     * "this" is the same as "car", however,
     * it is more maintainable to use this
     * in the case that you need to refactor
     * your code.
     */
    const speed = this.speed;
    console.log(`running at ${speed} KM/h`);
  }
};


/**
 * In this case, the "this" keyword
 * is referencing a global object (Window)
 */
const logThis = function(){
  console.log(this);
}

/**
 * when using the same function as a method
 * (inside an object), the keyword "this"
 * has a different meaning which is the
 * object itself.
 */
const obj = {
  logThis: logThis
};

const obj2 = {
  val: 1,
  logThis: logThis
}

logThis(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
obj.logThis(); // {logThis: ƒ}
obj2.logThis(); // {val: 1, logThis: ƒ}


