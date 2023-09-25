// Ex2.2 - One and Zero - Binary

// const binaryArrayToNumber = arr => parseInt(arr.join(''),2) // parseInt coverts string to an integer.
// // 2 = binary in a radix parameter , radix parameter =  specifies the number system to use.[default is 10 ( decimal )]


// console.log(binaryArrayToNumber([1,0,0,1]));




// Ex3.1 - Growth Of population

//solution 1 :


// function nb_year(p0 , percent , aug , p){

//     for(var count = 0 ; p0 < p ; count++){
//         p0 += p0 * (percent / 100) + aug | 0  // | 0 removes the decimal [makes it integer]
//     }
//     return count;


// }

//solution 2 :

// function nb_year(p0 , percent , aug , p){

//     let year = 0;
//     while (p0 < p){
//     p0 += p0 * (percent / 100) + aug | 0

//     year++
//     }
//     return year;
//     }


// console.log(nb_year(1500 , 5 , 100 , 5000))





// Ex3.2 - People on the Bus

//solution 1

// let number = function(busStops){
//     let result = 0;
//     for(let index = 0 ; index < busStops.length ; index++){
//         result+= busStops[index][0] - busStops[index][1]
//     }
//     return result
// }


//solution 2

// let number = function(busStops){

// 	let totalPeople = 0;
//   for (let i = 0 ; i < busStops.length; i++) {
//   	totalPeople += busStops[i][0];
//     totalPeople -= busStops[i][1];
//   }
//   return totalPeople;
// }

//solution 3 

// let number = function(busStops){
//     return busStops.reduce((acc,[peopleOn , peopleOff]) => acc + peopleOn - peopleOff , 0)
// }

// console.log(number([[10,0],[3,5],[5,8]]));



// Ex4.2 - Tribonacci

// function tribonacci(signature, n) {

//     if ( n === 0){
//     return []
//     }else if( n === 1 ){
//         return [1]
//     }else {
//         for(let i = 3 ; i <= n ; i++){
//             signature[i] = signature[i-1] + signature[i-2] + signature[i-3]
//         }
//         signature.pop()
//         return signature;
//     }
// }

// console.log(tribonacci([1,1,1] , 10))




// Ex5.4 - To Weird Case

// function toWeirdCase(string){
    
//     string = string.toLowerCase().split(' ')
//     for(let i = 0 ; i  < string.length ; i++){
//         string[i] = string[i].split('')

//         for(let j = 0 ; j < string[i].length ; j++){
//             if(j % 2 === 0){
//             string[i][j] = string[i][j].toUpperCase()
//             }
//         }
//         string[i] = string[i].join('')
//     }

// return string.join(' ');

// }

// console.log(toWeirdCase('String is here'))




// Ex6.3 - organize strings


// const  longest = (s1,s2) => {

//    return  [...new Set(s1 + s2)].sort().join('')
// }

// console.log(longest('xyaabbbccccdefww' , 'xxxxyyyyabklmopq'))
