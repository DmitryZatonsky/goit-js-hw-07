const categoriesList = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesList.length} категории.`);

categoriesList.forEach(category => {
  console.log(`Категория: ${category.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${category.lastElementChild.children.length}`)
});