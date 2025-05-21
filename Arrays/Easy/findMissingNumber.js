var arr = [1, 2, 3, 5, 6, 8];

for (let index = 0; index < arr.length; index++) {
  if (arr[index + 1] - 1 !== arr[index]) {
    console.log(arr[index + 1] - 1);
  }
}
