// Name : Hasan Omar



// EX 1.1  -- Yes or No

// function boolToString(bool){

//    const str =  bool === true ? 'Yes' :  'No';
//    return str;

// }
// console.log(boolToString(true));







//  Ex2.1 - Sum of lowest numbers

// function sumOfLowestNumbers(arr){

//     const sorting = arr.sort((a,b) => a - b); // sorts numbers

//     if(arr.length < 4 ){
//         return `Please put more than 3 numbers in the array`;
//     }
//     if(sorting[0] < 0 ){ // [0] = lowest number because i already sorted it
//         return `Only Positive numbers allowed!`
//     }

//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] % 1 !== 0) // checks if there are floats
//         return `Only integers allowed!` 
//     }

//     return sorting[0] + sorting[1];


// }
// console.log(sumOfLowestNumbers([21,7,12,5,1,20]))










// Ex2.3 - Find the Next Perfect Square



// function findNextSquare(n){

// if (Math.sqrt(n) % 1 === 0){ // checks if its an integer
// return (Math.sqrt(n) + 1) ** 2 // ** = power operator , ( Math.sqrt(121) = 11 + 1 = 12 ^ 2 = 144;
// }
// else {
//     return -1
// }
// }
// console.log(findNextSquare(121))








// Ex2.4 - Unique


// function findUniq(arr) {

//     if(arr.length < 3){
//         return `Array most contain atleast 3 elements`
//     }

//     for(let i = 0 ; i < arr.length ; i++){

//     if(arr[i] !== arr[i+1]){
//     return arr[i+1] 
// }
// }}
// console.log(findUniq([ 1, 1 , 1 , 2 , 1 , 1]))





// Ex2.5 - Summation

// function summation(n){

//     let result = 0;

//     if(n < 0)
//     return `The number most be positive`

//     for (let i = 1 ; i <= n ; i++){

//         result += i
//     }
// return result;

// }
// console.log(summation(8))




// Ex2.6 - Years and Centuries


// function centuryFromYear(year){

// let century = year = (year - 1) / 100 + 1;
// century = Math.floor(century);
// return century

// }
// console.log(centuryFromYear(1705))





// Ex2.7 - Basic Math

// function basicOp(str , value1, value2){

// if( str === '+'){

//     return value1 + value2;
// }
// else if (str === '-'){

//     return   value1 - value2;
// }
// else if (str === '*'){
//     return  value1 * value2;

// }
// else if (str === "/"){
//     return  value1 / value2;
// }
// else {
//     return (`Please use only one of these operators : '+' , '-' , '*' , '/' `)
// }
// }
// console.log(basicOp('+' , 7 , 4))




// Ex4.1 - Fibonacci -

// function fib(n){

// const fib = [0,1];

// for(let i = 2 ; i< n ; i++){
//     fib[i] = fib[i-1] + fib[i-2]
// }
// return fib;

// }
// console.log(fib(13))




// Ex5.1 - trimming string

// function stringTrimming(str){

//     let trim = str.slice(1 , -1) ;
//     return trim;
// }

// console.log(stringTrimming('Hhello'))



// Ex5.2 - String Repeat

// function repeatStr(times , str){

//     const repeat = str.repeat(times,str);
//     return repeat;

// }
// console.log(repeatStr(5,'Hello'))




//   Ex5.3 - To Camel Case

// function toCamelCase(str){

//     str = str.split(''); // makes it an array

//     return str.map(function(dash, nextChar){

//       if(dash === '-' || dash === '_'){
//         dash = str[nextChar + 1].toUpperCase();
//         str.splice(nextChar + 1, 1);
//       }

//       return dash;
//     }).join(''); // brings it back to string
//   }
//   console.log(toCamelCase("The-stealth-warrior"))




//Ex5.5 - Abbreviate two words

// function initials(str){

// const array = str.split(" ") // makes it an array
// return (array[0][0] + "." + array[1][0]).toUpperCase()
// }

// console.log(initials('Sam Harris'))





//Ex5.6 - Mask


// function maskify(str){

//     return str.replace(/.(?=.{4})/g, "#"); // g = global , {4} without last 4 digits/chars

// }
// console.log(maskify('Spooder-Man'))




// Ex5.7 - shortest words

// function shortestWord(str){

// const array = str.split(" ");
// const short = array.reduce((a, b) => a.length <= b.length ? a : b)

// return short;
// }
// console.log(shortestWord('The? quick brown fox jumps over the lazy dog'))





// Ex6.1 - Mumbling



// function accum(str) {

// const result = [];
// const lowerStr = str.toLowerCase();
      
//         for(let i = 0; i < lowerStr.length; i++) {

//            str = lowerStr[i].toUpperCase()

//           for(let j = 0; j < i; j++) {

//             str += lowerStr[i]
//           }
//           result.push(str)
//         }
      
//         return result.join("-")
//       }

// console.log(accum('abcd'))





// Ex6.2 - Counting Duplicates

// function countDuplicates(text){

//     let result = 0,
//     sortingObject = {};

//     text.toLowerCase().split('').map(str => {

//         if (!sortingObject.hasOwnProperty(str)) {
//           sortingObject[str] = 0;
//         } else {
//           if (sortingObject[str] === 0) {
//             result += 1;
//           }
//           sortingObject[str] = sortingObject[str] + 1;
//         }
//     });
//     return result;
//   }
// console.log(countDuplicates('indivisibility'))




// Ex6.4 - isogram

// first solution :

// function isIsogram(str){
   
    
//   if (str.isEmpty) {  //if empty return true.
//     return true;
//   }
//    else {
//     str = str.toLowerCase();  // All lower case.
//   }

//   let array = str.split('');  //splits string into array of individual characters. 
//   let sortedArr = array.slice().sort(); // copies array but sorts characters alphabetically

//   for (let i = 0; i < array.length; i++) {
//     if (sortedArr[i + 1] === sortedArr[i]) {  //if duplicate is found return false.

//       return false;
//     }
//   }
//   return true;  //else return true
 
// }


// second solution :

// const isIsogram = str => 
//     new Set(str.toLowerCase()).size === str.length  // new Set checks if there is a unique character [ 2 of the same characters]
//                                                     // .size returns the number of unique elements in a Set object.




// console.log(isIsogram('Dermatoglyphics'));


