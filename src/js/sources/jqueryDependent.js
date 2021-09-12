document.addEventListener("DOMContentLoaded", () => {
  $(".single--carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoPlay: true,
    swipeToSlide: true,

    prevArrow: `<button class=' slick-prev '><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button class=' slick-next '><i class="bi bi-chevron-right"></i></button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".newarrivals .carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoPlay: false,
    swipeToSlide: true,
    prevArrow: `<button class=' slick-prev '><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button class=' slick-next '><i class="bi bi-chevron-right"></i></button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,

          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".dropdown-toggle").dropdown();
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    swipeToSlide: true,

    asNavFor: ".slider-nav",
    prevArrow: `<button class=' slick-prev '><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button class=' slick-next '><i class="bi bi-chevron-right"></i></button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
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
    swipeToSlide: true,
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
  $("#checkout form").submit(function (e) {
    e.preventDefault();
    $("#checkout").removeClass("show active");
    $("#payment").addClass("show active");
    $("a[data-bs-target='#checkout']").removeClass("active");
    $("a[data-bs-target='#payment']").addClass("active");
    $(".indicator .w-50").addClass("w-75");
  });
  $("#backtocheckout").click(function (e) {
    e.preventDefault();
    $("#checkout").addClass("show active");
    $("#payment").removeClass("show active");
    $("a[data-bs-target='#checkout']").addClass("active");
    $("a[data-bs-target='#payment']").removeClass("active");
    $(".indicator .w-50").removeClass("w-75");
  });
  $("#payment form").submit(function (e) {
    e.preventDefault();
    window.location = "./orderComplete";
  });

  $("#form--signup").submit(function (e) {
    e.preventDefault();
    $(this).hide("fast");
    $(this).next().show("fast");
    let ph = $("#phnum--signup").val();
    if (ph) {
      $("#label--ph").text(ph[0] + ph[1] + "XXXXXX" + ph[8] + ph[9]);
    }
  });

  $(".hamburger a").click(function (e) {
    $("nav.primary-nav").toggleClass("active");
  });
  $("nav.primary-nav .backdrop").click(function (e) {
    $("nav.primary-nav").removeClass("active");
  });
  $("#search--input").on("keyup", function (e) {
    if ($(this).val()) {
      $(this).next().removeClass("hide");
    } else {
      $(this).next().addClass("hide");
    }
  });
  $("#search--input").on("blur", function (e) {
    setTimeout(() => {
      $(this).next().addClass("hide");
    }, 300);
  });
  

  if (window.innerWidth < 800) {
    $(".category-page .title--md.title").click(function (e) {
      $(this).parent().find(".hide--mob").toggle("slow");
    });
  }

});
