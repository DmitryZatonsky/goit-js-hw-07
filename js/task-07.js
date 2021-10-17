const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

function onValueFontSize (event) {

  console.log(spanRef.style.fontSize = event.currentTarget.value + 'px');
};

inputRef.addEventListener('input', onValueFontSize);

