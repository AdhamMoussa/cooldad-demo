import $ from 'jquery';
import SmoothScroll from '../../../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills';


export default class Header {
  constructor() {
    this.window = $(window);
    this.header = $('#header');
    this.sections = $('.section');
    this.navElements = $('.header__nav-list-item');
    this.scroll = new SmoothScroll('a[href*="#"]', {speed: 1000});
    this.triggerHeader();
  }
  triggerHeader() {
    const that = this;
    this.window.scroll(function () {
      // solid header on scroll
      if (that.window.scrollTop() > 150) {
        that.header.addClass('header--solid');
      } else {
        that.header.removeClass('header--solid');
      }

      // link sync with sections
      if (that.window.scrollTop() < 300) {
        that.navElements.removeClass('header__nav-list-item--active');
      }

      that.sections.each(function () {
        if (that.window.scrollTop() > $(this).offset().top - 300) {
          const target = '#'+$(this).attr('id');
          $('[href="'+target+'"]').parent().addClass('header__nav-list-item--active').siblings().removeClass('header__nav-list-item--active');
        }
      });
    });
  };
}