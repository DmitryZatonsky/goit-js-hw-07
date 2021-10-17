const counterValue = document.querySelector('#value');
const takeAwayButton = document.querySelector('[data-action="decrement"]');
const addButton = document.querySelector('[data-action="increment"]');

const decrement = () => --counterValue.textContent;

const increment = () => ++counterValue.textContent;

takeAwayButton.addEventListener('click', decrement);
addButton.addEventListener('click', increment);