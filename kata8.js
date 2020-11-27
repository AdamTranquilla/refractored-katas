const multiplicationTable = function (maxValue) {
  square = "";
  for (let y = 1; y <= maxValue; y++) {
    for (let x = 1; x <= maxValue; x++) {
      square = square + x * y + ' '
      if (x === maxValue) {
        square = square + '\n'
      }
    }
  }
  return square;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));