document.addEventListener("DOMContentLoaded", () => {
  $(".single--carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoPlay: true,

    prevArrow: `<button class=' slick-prev '><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button class=' slick-next '><i class="bi bi-chevron-right"></i></button>`,
  });
  $(".newarrivals .carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoPlay: false,
    prevArrow: `<button class=' slick-prev '><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button class=' slick-next '><i class="bi bi-chevron-right"></i></button>`,
  });
  $(".dropdown-toggle").dropdown();
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    prevArrow: `<button class=' slick-prev '><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button class=' slick-next '><i class="bi bi-chevron-right"></i></button>`,
  });
  $(".slider-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    centerPadding: 0,
  });
  $(".dec").click(function () {
    var qtyNode = $(this).next();
    var qty = qtyNode.val();
    if (qty > 1) {
      qtyNode.val(--qty);
      $(".inc").removeClass("disabled");
    } else {
      $(this).addClass("disabled");
    }
  });
  $(".inc").click(function () {
    var qtyNode = $(this).prev();
    var max = qtyNode.attr("max");
    max = parseInt(max);
    var qty = qtyNode.val();
    if (qty < max) {
      qtyNode.val(++qty);
      $(".dec").removeClass("disabled");
    } else {
      $(this).addClass("disabled");
    }
  });
  $(".comment--section .readmore").click(function (e) {
    if ($(this).parent().hasClass("active")) {
      $(this).text("Read More");
    } else {
      $(this).text("Read Less");
    }
    $(this).parent().toggleClass("active");
  });
});
