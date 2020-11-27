const sumLargestNumbers = function (data) {
  let BIG = 0;
  let big = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > BIG) {
      big = BIG
      BIG = data[i]
    } else if (data[i] > big) {
      big = data[i]
    }

  }
  return big + BIG
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));