'use strict';

/** ***** Functions & event handlers ****** */

function changeColor() {
  const colorChangeEls = $('.color-change');

  for (const el of colorChangeEls) {
    el.classList.add('red');
  }
}

function validateNumber(evt) {
  evt.preventDefault();

  const numberInput = document.querySelector('input[name="number"]');
  const userNum = Number(numberInput.value); // typecast to num

  const formFeedback = document.querySelector('#formFeedback');
  if (!userNum || userNum >= 10) {
    formFeedback.innerText = 'Please enter a smaller number';
  } else {
    formFeedback.innerText = 'You are good to go!';
  }
}

/** ***** Attach event handlers ****** */

$('.color-changer').on('click', changeColor);
$('.number-form').on('submit', validateNumber);
