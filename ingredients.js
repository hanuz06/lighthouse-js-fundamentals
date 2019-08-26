// const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// // Write a while loop that prints out the contents of ingredients:
// var x = 0;
// while (x < ingredients.length) {  
//   console.log(ingredients[x]);
//   x++;
// }
// // Write a for loop that prints out the contents of ingredients:
// for (var i = 0; i < ingredients.length; i++) {
//   console.log(ingredients[i]);
// }
// // Write any loop (while or for) that prints out the contents of ingredients backwards:
// for (var i = ingredients.length-1; i >=0; i--) {
//   console.log(ingredients[i]);
// }

// function range(start, end, step) {
//   if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
//     return [];
//   }
//   let newRange = [];
//   for (let i = start; i <= end; i += step) {
//     newRange.push(i);
//   }
//   return newRange;
// }

// console.log(range(-5, 2, 3));


// function lastIndexOf(arr, item) {
//   return arr.lastIndexOf(item);
// }
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);


// function loopyLighthouse(range, multiples, words) {
//   for (var i = range[0]; i <= range[1]; i++) {
//     if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
//       console.log(words[0] + words[1]);
//     } else if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(i);
//     }
//   }
// }
// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

// function concat(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);

// function merge(arr1,arr2) {
//   return (arr1.concat(arr2)).sort();
// }
// console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
// console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
// console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);