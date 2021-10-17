const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const arrElList = ingredients.map(ingredient => {
  const elList = document.createElement('li');
  elList.textContent = ingredient;
  return elList;
});

ingredientsList.prepend(... arrElList);