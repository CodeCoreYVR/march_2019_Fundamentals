const counter = {
  set: function( count ){
    this.count = count;
  },
  inc: function() {
    this.count++;
  },
  dec: function() {
    this.count--;
  },
  now: function() {
    return this.count;
  }
};

/**
 * at this point in time,
 * the counter object
 * does not have the count
 * property. Because we did not
 * define/declare it.
 */
console.log(counter);

/**
 * Starting the count at 0
 */
counter.set(0);

/**
 * At this point in time,
 * counter does have
 * the count property with
 * a value of 0 because of
 * the previous statement.
 * 
 * the program looked for the count
 * property, and since it didn't
 * exist, it created it.
 */
console.log(counter);

console.log(`the counter is at ${counter.now()}`);
counter.inc(); counter.inc(); counter.inc();
console.log(`the counter is at ${counter.now()}`);
counter.dec();
console.log(`the counter is at ${counter.now()}`);



const counter = {
  count: 0,
  step: 1,
  set: function( count ){
    return this.count = count;
  },
  inc: function() {
    return this.count += this.step;
  },
  dec: function() {
    return this.count -= this.step;
  },
  now: function() {
    return this.count;
  },
  setStep: function(step) {
    return this.step = step;
  }
};

counter.now(); // 0
counter.inc(); // 1
counter.inc(); // 2
counter.setStep(3);
counter.inc(); // 5









