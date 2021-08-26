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
});
