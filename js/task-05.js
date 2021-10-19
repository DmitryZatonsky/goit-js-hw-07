let inPut = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output');

inPut.oninput = removingSpaces;

function removingSpaces () {
  inPut.value = inPut.value.trim();
};

inPut.addEventListener('input', (event) => {
  inPut.value.length === 0
    ? outPut.textContent = 'незнакомец'
    : outPut.textContent = `${event.target.value}`
});
