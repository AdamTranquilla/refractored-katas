const makeCase = function (input, caseType) {
  let newArray = []
  if (!Array.isArray(caseType)) {
    newArray.push(caseType)
  } else if (Array.isArray(caseType)) {
    newArray = caseType
  }
  for (let num = 0; num < newArray.length; num++) {
    let priority1 = ''; let priority2 = ''; let priority3 = ''
    for (let i = 0; i < input.length; i++) {
      if (newArray[num] === 'camel' && (input[i] === " ")) {
        i++; priority1 += input[i].toUpperCase()
      } else if (newArray[num] === 'pascal' && (i === 0)) {
        priority1 += input[i].toUpperCase()
      } else if (newArray[num] === 'pascal' && input[i] === " ") {
        i++; priority1 += input[i].toUpperCase()
      } else if (newArray[num] === 'snake' && (input[i] === " ")) {
        priority1 += '_'
      } else if (newArray[num] === 'kebab' && (input[i] === " ")) {
        priority1 += '-'
      } else if (newArray[num] === 'title' && (input[i - 1] === " " || i === 0)) {
        priority1 += input[i].toUpperCase()
      } else {
        priority1 += input[i]
      }
    }
    for (let i = 0; i < priority1.length; i++) {
      if (newArray[num] === 'vowel' && ("aeiou".includes(priority1[i]))) {
        priority2 += priority1[i].toUpperCase()
      } else if (newArray[num] === 'consonant' && (!"aeiou".includes(priority1[i]))) {
        priority2 += priority1[i].toUpperCase()
      } else {
        priority2 += priority1[i]
      }
    }
    for (let i = 0; i < priority2.length; i++) {
      if (newArray[num] === 'upper') {
        priority3 += priority2[i].toUpperCase()
      } else if (newArray[num] === 'lower') {
        priority3 += priority2[i].toLowerCase()
      } else {
        priority3 += priority2[i]
        input = priority3
      }
    }
    return priority3
  }
};
console.log('thisIsAString   =? ' + makeCase("this is a string", "camel"));
console.log('ThisIsAString   =? ' + makeCase("this is a string", "pascal"));
console.log('this_is_a_string=? ' + makeCase("this is a string", "snake"));
console.log('this-is-a-string=? ' + makeCase("this is a string", "kebab"));
console.log('This Is A String=? ' + makeCase("this is a string", "title"));
console.log('thIs Is A strIng=? ' + makeCase("this is a string", "vowel"));
console.log('THiS iS a STRiNG=? ' + makeCase("this is a string", "consonant"));
console.log('THIS_IS_A_STRING=? ' + makeCase("this is a string", ["upper", "snake"]));