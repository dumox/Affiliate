// HAMMER SLIDER

const HammerSlider = require('hammer-slider');

if(HammerSlider) {
  const slider = HammerSlider(document.getElementById('hammer-slider'));
  document.querySelector('.btn-prev-feedback').addEventListener('click', slider.prev, false);
  document.querySelector('.btn-next-feedback').addEventListener('click', slider.next, false);
}


// ADD AND REMOVE CLASS TO INPUT PARENT ELEMENT 

(function() {

  const inputsArr = Array.from(document.querySelectorAll('input'));
  
  inputsArr.forEach(input => {
    if(input.getAttribute('type') !== 'checkbox') {
      input.addEventListener('focus', onInputFocus);
      input.addEventListener('blur', onInputBlur);
    }
  });
  
  function onInputFocus(e) {
    e.target.parentNode.classList.add( 'input--filled' );
  }

  function onInputBlur(e) {
    if(e.target.value.trim() === '' ) {
      e.target.parentNode.classList.remove( 'input--filled' );
    }
  }

})();