// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector("nav");

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed__nav");
  } else {
    nav.classList.remove("fixed__nav");
  }
}
window.addEventListener("scroll", fixedNav);

// Hotspots

const selectHotspot = (e) => {
  const clickedHotspot = e.target.parentElement;
  const container = clickedHotspot.parentElement;

  // only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
  const hotspots = container.querySelectorAll(".lg-hotspot");
  hotspots.forEach((hotspot) => {
    if (hotspot === clickedHotspot) {
      hotspot.classList.toggle("lg-hotspot--selected");
    } else {
      hotspot.classList.remove("lg-hotspot--selected");
    }
  });
};

(() => {
  const buttons = document.querySelectorAll(".lg-hotspot__button");
  buttons.forEach((button) => {
    button.addEventListener("click", selectHotspot);
  });
})();

// SLAIDER
// const swiper = new Swiper(".swiper", {
//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },

//     // Responsive breakpoints
//     breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 3,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//   }
// });
// jQuery(function ($) {
//   // bind event handlers to modal triggers
//   $("body").on("click", ".modal__btn2", function (e) {
//     e.preventDefault();
//     $("#exampleModal").modal(".modal__wrapper2").open();
//   });

//   // attach modal close handler
//   $(".modal__close2").on("click", function (e) {
//     e.preventDefault();
//     $.modal().close();
//   });
// });

// $(function () {
//   $(".btn").click(function () {
//     var imgtovara = $(this).attr("data-imgplan");
//     var nametitle = $(this).attr("data-nameArea");
//     var pricetovar = $(this).attr("data-rooms");

//     $(".body__item-img").append(
//       '<img class="img-fluid" src="' + imgtovara + '" alt="..." />'
//     );
//     $(".body__item-text").append('<p class="h3">' + nametitle + "</h1>");
//     $(".body__item-text").append(
//       "<p><strong>Цена</strong>:" + pricetovar + "</p>"
//     );
//   });
// });

// $(function () {
//   $(".modal__close2").click(function () {
//     $(".body__item-img").empty();
//     $(".body__item-text").empty();
//   });
// });

$(document).ready(function ($) {
  $(".popup-open").click(function () {
    $(".popup-fade").fadeIn(100);
    $(".popup-fade").css("display", "flex");
    var imgtovara = $(this).attr("data-imgplan");
    var nametitle = $(this).attr("data-nameArea");
    var pricetovar = $(this).attr("data-rooms");

    $(".body__item-img").append(
      '<img class="img-fluid" src="' + imgtovara + '" alt="..." />'
    );
    $(".roomNumber").text(nametitle);
    // $(".body__item-text").append(
    //   "<p><strong>Цена</strong>:" + pricetovar + "</p>"
    // );
    return false;
  });

  $(".popup-close").click(function () {
    $(this)
      .parents(".popup-fade")
      .fadeOut(100, function () {
        $(".body__item-img").empty();
        // $(".body__item-text").empty();
      });

    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".popup-fade").fadeOut(100, function () {
        $(".body__item-img").empty();
        // $(".body__item-text").empty();
      });
    }
  });

  $(".popup-fade").click(function (e) {
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut(100, function () {
        $(".body__item-img").empty();
        $(".body__item-text").empty();
      });
    }
  });
});

// Модальное окно
// function bindModal(trigger, modal, close) {
//   (trigger = document.querySelector(trigger)),
//     (modal = document.querySelector(modal)),
//     (close = document.querySelector(close));

//   const body = document.body;

//   trigger.addEventListener("click", (e) => {
//     e.preventDefault();
//     modal.style.display = "flex";
//     body.classList.add("locked");
//   });
//   close.addEventListener("click", () => {
//     modal.style.display = "none";
//     body.classList.remove("locked");
//   });
//   modal.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       modal.style.display = "none";
//       body.classList.remove("locked");
//     }
//   });
// }

// // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// // ВТОРОЙ аргумент - класс самого модального окна.
// // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
// // bindModal(".modal__btn", ".modal__wrapper", ".modal__close");
// bindModal(".modal__btn2", ".modal__wrapper2", ".modal__close2");
// bindModal(".modal__btn3", ".modal__wrapper3", ".modal__close3");
// bindModal(".modal__btn4", ".modal__wrapper4", ".modal__close4");

// var modal = document.getElementById("modal");
// var open = document.getElementsByClassName("open");
// var close = document.getElementsByClassName("close");

// for (var i = 0; i < open.length; i++) {
//   open[i].onclick = function () {
//     var id = this.getAttribute("data-modal");
//     var modal = document.getElementById(id);
//     modal.style.display = "block";
//   };
// }

// for (var i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     var id = this.getAttribute("data-modal");
//     var modal = document.getElementById(id);
//     modal.style.display = "none";
//   };
// }
