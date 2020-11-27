const calculateChange = function (total, cash) {
  money = [{ coin: 'twenty', value: 2000 }, { coin: 'ten', value: 1000 }, { coin: 'five', value: 500 }, { coin: 'toonie', value: 200 }, { coin: 'loonie', value: 100 }, { coin: 'quarter', value: 25 }, { coin: 'dime', value: 10 }, { coin: 'nickel', value: 5 }, { coin: 'penny', value: 1 },]
  change = cash - total
  newObj = {}
  for (let i = 0; i < money.length; i++) {
    let newAmount = 0
    while (change >= money[i].value) {
      change -= money[i].value
      newObj[money[i].coin] = newAmount += 1
    }
  }
  return newObj
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));