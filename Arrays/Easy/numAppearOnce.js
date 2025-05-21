var arr = [1, 2, 1, 2, 10];

// SOLUTION USING MAP

// var map = new Map();

// for (let index = 0; index < arr.length; index++) {
//   if (!map.has(arr[index])) {
//     map.set(arr[index], 1);
//   } else {
//     var count = map.get(arr[index]) + 1;
//     map.set(arr[index], count);
//   }
// }

// for (let [key, value] of map.entries()) {
//   if (value === 1) {
//     console.log(key);
//   }
// }

// OPTIMAL SOLUTION
var xor = 0;
for (let index = 0; index < arr.length; index++) {
  xor ^= arr[index];
}

console.log(xor);
