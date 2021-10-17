const inPut = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output');

inPut.addEventListener('change', (event) => {
  outPut.textContent = `${event.target.value}`;
});