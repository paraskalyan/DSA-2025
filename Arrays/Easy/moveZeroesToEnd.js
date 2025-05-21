var arrr = [1, 0, 2, 3, 0, 0, 4];
var count = 0;
var newArr = [];
for (let index = 0; index < arrr.length; index++) {
  if (arrr[index] === 0) {
    count += 1;
  } else {
    newArr.push(arrr[index]);
  }
}
for (let index = 0; index < count; index++) {
  newArr.push(0);
}
console.log(newArr);
