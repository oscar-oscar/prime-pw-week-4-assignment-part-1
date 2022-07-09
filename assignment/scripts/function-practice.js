console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
hello();



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log( 'Hello,' + ' ' + name);
  return; 
}
// Remember to call the function to test
helloName('Jo!');
helloName('Stacy!')



// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  console.log( ' adding firstNumber & secondNumber');
// return firstNumber + secondNumber;
  return firstNumber + secondNumber; 
}

console.log( 'sum of numbers:', addNumbers (10, 50) );


// 4. Function to multiply three numbers & return the result
function multiply( num1, num2, num3){
  console.log( 'multiplying' , num1, num2, num3 );
  return num1 * num2 * num3;
  
}
console.log( 'product = ', multiply( 3, 6, 9) );


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    //positive will return true
    return true;
  } 
  // } else{
  //   number % 2; // unnecessary since anything not positive will be false
     return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

console.log(isPositive (3));
console.log (isPositive(0));
console.log(isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.



function getLast( array ) {
   console.log('array items =' ,  array.length)
  if ( array.length > 0){
    
    return array[array.length -1];
  
  }else 
  
  return '0 items returns undefined';
  
}

console.log(getLast([]));
console.log(getLast([1, 5, 11]));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

// works to return false but not true when I input values into array
function find( value, array ){

  for(valueInput of value){
    
    console.log('value:', valueInput);
    
    if(array.length > 0){
      return true;
    }
  }
 return false;


}
console.log(find([]));
onsole.log(find([1, 3, 4]));


// function find(value, a) {
//   for (let i = 0; i < a.length; i++) {
//     if (value === a[i]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(find(a[i]))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

function actualMath( num0, num1){
  console.log( ' in actualMath', num0, num1 );
  let answer = num0 * num1;
  return answer;
}//end actualMath

// function logger (){
//   console.log( 'in logger' );
// }// end logger

// //math example
// function mathEx(){
//   console.log ( 'in mathEx');
//   let answer = 3 * 9;
//   return answer;
// }

// function returner (){
//   console.log( 'in returner' );
//   return true;
// }//returner

// logger(); // call
// returner(); //call
// console.log('running returner', returner() );
// console.log( 'running math example:', mathEx());
console.log( 'running actualMath with 4 & 6:', actualMath( 4, 6 ) );
console.log( 'running actualMath with 0.123 & 654:', actualMath( 0.123, 654 ));
console.log( 'running actualMath with 1 & 2:', actualMath( 1, 2 ) );
console.log( 'running actuaMath with 327 & 81.3:', actualMath( 327, 81.3 ) );

// function helloP(){
//   console.log('hellop');
// }
// helloP();