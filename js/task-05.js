const inPut = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output');

inPut.addEventListener('input', (event) => {
  inPut.value.length === 0
    ? outPut.textContent = 'незнакомец'
    : outPut.textContent = `${event.target.value}`
});