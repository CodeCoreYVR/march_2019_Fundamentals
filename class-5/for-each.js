const listOfPeople = ['Arturo', 'Somayeh', 'Mathew', 'Kaylyn', 'Crisitina'];

/**
 * For each is a high order function
 * that takes a function with 3 parameter
 */
const printInfo = (currentValue, index, arrayItself) => {
  console.log('-----------');
  console.log(`Current Value is: ${currentValue}`);
  console.log(`Index is: ${index}`);
  console.log(`Array is: ${arrayItself}`);
}
listOfPeople.forEach( printInfo );