// function isOdd(num){
//   return num%2===0;
// }
// console.log("3 is odd: " + isOdd(3));
// console.log("8 is odd: " + isOdd(8));

// function ageCalculator(name, yearOfBirth, currentYear) {
//   return name + " is " + (currentYear-yearOfBirth) + " years old.";
// };

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));

// function howManyHundreds(num) {
//   let remainder = num % 100;
//   return (num - remainder) / 100;
// }

// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

// function calculateRectangleArea(length, width) {
//   if (length < 0 || width < 0) {
//     return undefined;
//   } else {
//     return length * width;
//   }
// }

// function calculateTriangleArea(base, height) {
//   if (base < 0 || height < 0) {
//     return undefined;
//   } else {
//     return base * height / 2;
//   }  
// }

// function calculateCircleArea(radius) {
//   if (radius < 0) {
//     return undefined;
//   } else {
//     return Math.PI * radius * radius;
//   }  
// }

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(3)); // should print undefined


// var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

// console.log(hasEnoughPlayers(team));

// function hasEnoughPlayers(arr) {
//   return arr.length >= 7? true : false;
// };


/*
 * Programming Quiz: Joining the Crew (6-6)
 */

// var captain = "Mal";
// var second = "Zoe";
// var pilot = "Wash";
// var companion = "Inara";
// var mercenary = "Jayne";
// var mechanic = "Kaylee";

// var crew = [captain, second, pilot, companion, mercenary, mechanic];

// var doctor = "Simon";
// var sister = "River";
// var shepherd = "Book";

// crew.push(doctor,sister,shepherd);

// console.log(crew);


// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//   19, 300, 3775, 299, 36, 209, 148, 169, 299,
//   6, 109, 20, 58, 139, 59, 3, 1, 139
// ];

// // Write your code here
// test.forEach(function (num, ind, arr) {
//   if (num % 3 === 0) {
//     arr[ind] = num + 100;      
//   }  
// });

// console.log(test);

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

// var bills = [50.23, 19.12, 34.01,
//   100.11, 12.15, 9.90, 29.11, 12.99,
//   10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];

// let totals = bills.map(function(num){
//   return Number((num+(num*0.15)).toFixed(2));
// });

// console.log(totals);


// Directions:

// Use a nested for loop to take the numbers array below and replace all of the values that are divisible by 2 (even numbers) with the string "even" and all other numbers with the string "odd".

// var numbers = [
//   [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//   [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//   [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//   [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//   [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//   [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//   [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//   [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//   [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//   [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];


// for (var r=0; r<numbers.length; r++){
//   for (var c=0;c<numbers[r].length; c++) {
//     if (numbers[r][c]%2===0){
//       numbers[r][c]="even";      
//     } else {
//       numbers[r][c]="odd";
//     }
//   }
// };

// console.log(numbers);