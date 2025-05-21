var arr = [1, 2, 3, 4, 5];
var arr2 = [2, 3, 4, 4, 5, 6];

var set = new Set();

for (let index = 0; index < arr.length; index++) {
  set.add(arr[index]);
}
for (let index = 0; index < arr2.length; index++) {
  set.add(arr2[index]);
}

const ans = [...set];
console.log(ans);
