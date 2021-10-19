const inputRef = document.querySelector('#validation-input');
const length = inputRef.getAttribute('data-length');


function onConditionCheck(event) {
  
  event.currentTarget.value.length === Number(length)
    ? toggleClass(inputRef, 'valid', 'invalid')
    : toggleClass(inputRef, 'invalid', 'valid')
  };

function toggleClass(reference, add, del) {
  reference.classList.add(add);
  reference.classList.remove(del);
};
   
inputRef.addEventListener('blur', onConditionCheck);

// function onConditionCheck(event) {
  
//   if (event.currentTarget.value.length === Number(length)) {
//     toggleClass(inputRef, 'valid', 'invalid')
//   } else {
//     toggleClass(inputRef, 'invalid', 'valid')
//   };
// };
