import $ from 'jquery';

export default class Animations {
  constructor() {
    this.sectionLinks = $('.section__link');
    this.animateArrows();
  }
  animateArrows() {
    this.sectionLinks.each(function () {
      $(this).hover(
        function () {
          $(this).find('img').addClass('animated wobble');
        },
        function () {
          $(this).find('img').removeClass('animated wobble');
        }
      );
    });
  }
}