const HammerSlider = require('hammer-slider');

var slider = HammerSlider(document.getElementById('hammer-slider'));
document.querySelector('.prev-feedback').addEventListener('click', slider.prev, false);
document.querySelector('.next-feedback').addEventListener('click', slider.next, false);

// const slider = HammerSlider(document.getElementById('hammer-slider'), {
//   slideSpeed: 60,
//   slideShow: true,
//   slideInterval: 4000,
//   dots: true,
//   mouseDrag: true,
//   beforeSlideChange: (targetSlide) => {
// 	console.log('Changing to slide number: ' + targetSlide);
//   }
// });