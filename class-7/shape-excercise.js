/**
 * GO TO https://s3.amazonaws.com/codecore/jquery-lab/index.html
 */

/**
 * Select All shapes
 */
// this will select all html elements that have the class shape
$('.shape') // this will return 16 elements

/**
 * Select all black shapes
 */

// this one is looking for all elements that have the shape class
// and all the elements that have the black class SEPARATELY.
// In other words, it's looking for elements that have both
// classes in the same element.
// $('.shape, .black');

// this is incorrectr because it's looking for elements
// that have the black class which exist inside items
// that have the shape class.
// $('.shape .black');

// this is correct;
$('.shape.black') // this will retrieve 4 elements

/**
 * Count the number of shapes
 */
$('.shape').length // 16

/**
 * Count the number of black shapes
 */
$('.shape.black').length // 4

/**
 * Count the number of black shapes AND blue shapes
 */
// this is incorrect because it expects to find elements that
// have all three classes.
// $('.shape.black.blue')

$('.shape.black, .shape.blue').length // 8

/**
 * Select all h1 tags
 */

$('h1')

/**
 * select all small circle
 */

$('.small.circle') // 4 elements



$('.shape')[0] // will retrieve the element in html
$('.shape').eq(0) // will retrieve the element wrapped with jquery functionality

/**
 * this will target an input tag with  an attribute
 * of type which is set to "text"
 */
$('input[type="text"]')

// when a single parameter is passed to the
// attr method, we are exctracting the attribute value.
// this kind of responsability makes this method (attr)
// a getter.
$('input[type="text"]').attr('value');


// $('input[type="text"]').attr('value');












