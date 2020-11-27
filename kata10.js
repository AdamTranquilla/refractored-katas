const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let item0 = false;
  let item1 = false;
  for (let recipe = 0; recipe < recipes.length; recipe++) {
    for (item of bakeryA) {
      if (item === recipes[recipe].ingredients[0]) {
        item0 = true
      } else if (item === recipes[recipe].ingredients[1]) {
        item1 = true
      }
    }
    for (item of bakeryB) {
      if (item === recipes[recipe].ingredients[0]) {
        item0 = true
      } else if (item === recipes[recipe].ingredients[1]) {
        item1 = true
      }
    }
    if (item0 === true && item1 === true) {
      return recipes[recipe].name
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));