import $ from "jquery";

export default class Don {
  constructor() {
    this.donValue = null;
    this.otherBtn = $("#other-don");
    this.fixedDon = $(".fixed-don");
    this.otherInputVisible = false;
    this.errorVisible = false;
    this.donSubmitBtn = $("#don-submit-btn");
    this.donSubmitError = $("#don-submit-error");
    this.otherBtnHandler();
    this.submitBtnHandler();
  }
  otherBtnHandler() {
    const that = this;
    this.otherBtn.click(function() {
      if (!that.otherInputVisible) {
        that.otherBtn.html(
          '<input type="number" placeholder="AUTRE" id="other-don-input">'
        );
        $("#other-don-input").focus();
        that.otherInputVisible = true;
      }
    });
    this.fixedDon.each(function() {
      $(this).click(function() {
        that.donSubmitError.css("opacity", "0");
        that.errorVisible = false;
        if (that.otherInputVisible) {
          that.otherBtn.html("Autre");
          that.otherInputVisible = false;
        }
      });
    });
  }
  submitBtnHandler() {
    const that = this;
    this.donSubmitBtn.click(function() {
      if (!that.otherInputVisible) {
        const donValue = $(".intro__don-amount-btn:checked").val();
        that.donValue = donValue;
        $('.payment-modal__title h2').html('Choose How You Want To Pay <span>$' + donValue + '</span>');
        $('.payment-modal').fadeIn();
      } else {
        const donValue = $("#other-don-input").val();
        if (donValue) {
          that.donSubmitError.css("opacity", "0");
          that.errorVisible = false;
          that.donValue = donValue;
          $('.payment-modal__title h2').html('Choose How You Want To Pay <span>$' + donValue + '</span>');
          $('.payment-modal').fadeIn();
        } else {
          that.donSubmitError.css("opacity", "1");
          that.errorVisible = true;
        }
      }
    });
    $('.payment-modal__close').click(function () {
      $('.payment-modal').fadeOut();
    });
  }
}
