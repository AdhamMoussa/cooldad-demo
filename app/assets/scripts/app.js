import Header from './modules/Header';
import Don from './modules/Don';
import Animations from './modules/Animations';
import $ from 'jquery';

// load section images only if window width > 992px
if ($(window).width() > 992) {
  $('.desktop-img').each(function () {
    $(this).attr('src', $(this).attr('data-src'));
  });
}
$(window).resize(function () {
  if ($(window).width() > 992) {
    $('.desktop-img').each(function () {
      $(this).attr('src', $(this).attr('data-src'));
    });
  }
});

const header = new Header();
const don = new Don();
const animations = new Animations();


// Vendors
// import 'lazysizes';
// import 'picturefill';

$('#loading').fadeOut();