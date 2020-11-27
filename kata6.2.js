const repeatNumbers = function (data) {
  let string = '';
  for (let arrayNum = 0; arrayNum < data.length; arrayNum++) {
    for (let i = 0; i < data[arrayNum][1]; i++) {
      string += data[arrayNum][0]
    }
    if(arrayNum < (data.length - 1)){
      string += ", ";
    }
  }
  return string
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));