const inputRef = document.querySelector('#validation-input');
const length = inputRef.getAttribute('data-length');

function onConditionCheck(event) {
  
  if (event.currentTarget.value.length == length) {
    
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');

  } else {

    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  };
};
   
inputRef.addEventListener('blur', onConditionCheck);