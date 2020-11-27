const conditionalSum = function (values, condition) {
  let sum = 0;
  if (condition === "even") {
    for (const num of values) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
  } else if (condition === "odd") {
    for (const num of values) {
      if (num % 2 !== 0) {
        sum += num;
      }
    }
  } else {
    sum = "invalid condition"
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "existance is pain"));
