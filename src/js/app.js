import {HammerSlider} from 'hammer-slider';

const slider = HammerSlider(document.getElementById('hammer-slider'), {
  slideSpeed: 60,
  slideShow: true,
  slideInterval: 4000,
  dots: true,
  mouseDrag: true,
  beforeSlideChange: (targetSlide) => {
	console.log('Changing to slide number: ' + targetSlide);
  }
});