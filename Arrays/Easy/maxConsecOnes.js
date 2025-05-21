var arr = [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];
var count = 0;
var max_count = 0;

for (let index = 0; index < arr.length; index++) {
  if (arr[index] === 1) {
    count += 1;
  } else {
    max_count = count;
    count = 0;
  }
}

console.log(Math.max(max_count, count));
