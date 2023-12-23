let HomepageSearch = document.querySelector(".homepage_search");
let SearchInput = document.querySelector(".HomepageSearch_input");

SearchInput.addEventListener("click", function () {
  HomepageSearch.classList.remove("search_orange");
  HomepageSearch.classList.add("search_white");
});

document.addEventListener("click", function (event) {
  // If user clicks inside the search box, do nothing
  if (event.target.closest(".homepage_search")) return;

  // If user clicks outside the search box, hide it.
  HomepageSearch.classList.add("search_orange");
  HomepageSearch.classList.remove("search_white");
});
$("#menu_icon").click(function () {
  $(".menu").css("visibility", "visible");
});
$("#close_icon").click(function () {
  $(".menu").css("visibility", "hidden");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    center: true,
    dots: true,
    nav: true,
    navtext: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});

$("#bear_right_hand").click(function () {
  $(this).addClass("rotate");
  setTimeout(function () {
    $("#bear_right_hand").removeClass("rotate");
  }, 500);
});

$("#bear_left_hand").click(function () {
  $(this).addClass("rotate");
  setTimeout(function () {
    $("#bear_left_hand").removeClass("rotate");
  }, 500);
});
