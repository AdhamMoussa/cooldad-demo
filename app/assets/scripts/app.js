import Header from './modules/Header';
import $ from 'jquery';

// load section images only if window width > 992px
if ($(window).width() > 992) {
  $('.desktop-img').each(function () {
    $(this).attr('src', $(this).attr('data-src'));
  });
}


const header = new Header();



// Vendors
// import 'lazysizes';
// import 'picturefill';