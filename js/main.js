$(document).ready(function () {
  $(".deals-slider").slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  });
});

function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}

$(document).ready(function () {
  $(".product-modalslider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
