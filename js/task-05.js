let inPut = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output');

inPut.addEventListener('input', (event) => {
  inPut.value.trim() === ''
    ? outPut.textContent = 'незнакомец'
    : outPut.textContent = `${event.target.value}`
});
