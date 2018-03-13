const HammerSlider = require('hammer-slider');

if(HammerSlider) {
  const slider = HammerSlider(document.getElementById('hammer-slider'));
  document.querySelector('.btn-prev-feedback').addEventListener('click', slider.prev, false);
  document.querySelector('.btn-next-feedback').addEventListener('click', slider.next, false);
}
