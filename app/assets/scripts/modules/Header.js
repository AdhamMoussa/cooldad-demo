import $ from 'jquery';
import SmoothScroll from '../../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills';


export default class Header {
  constructor() {
    this.window = $(window);
    this.header = $('#header');
    this.scroll = new SmoothScroll('a[href*="#"]', {speed: 1000});
    this.toggleSolidHeader();
  }
  toggleSolidHeader() {
    this.window.scroll(() => {
      if (this.window.scrollTop() > 150) {
        this.header.addClass('header--solid');
      } else {
        this.header.removeClass('header--solid');
      }
    });
  }
}