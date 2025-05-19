// OPTIMISED
function solution2(arr) {
  var val = arr[0];
  for (let index = 1; index < arr.length; index++) {
    arr[index - 1] = arr[index];
    console.log(index - 1, index);
  }
  arr[arr.length - 1] = val;
  console.log(arr);
}

//BRUTE FORCE
function solution1(arr) {
  var newArray = [];
  for (let i = 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  newArray[newArray.length] = arr[0];
  console.log(newArray);
}

var arr = [1, 2, 3, 4, 5];
solution1(arr);
