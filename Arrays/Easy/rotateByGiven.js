2, 1, 6, 5, 4, 3;
3, 4, 5, 6, 1, 2;

function solution(arr, k) {
  for (let index = 0; index < k; index++) {
    arr[index + 1] = arr[index];
  }
}

var arr = [1, 2, 3, 4, 5, 6];
var k = 2;
solution(arr, k);
