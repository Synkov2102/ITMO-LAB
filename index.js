const swiper = new Swiper(".swiper", {
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      checkArrow();
    },
    resize: function () {
      checkArrow();
    },
  },
});

function checkArrow() {
  const swiperPrev = document.querySelector(".swiper-button-prev");
  const swiperNext = document.querySelector(".swiper-button-next");
  if (window.innerWidth >= 1440) {
    swiperPrev.style.display = "block";
    swiperNext.style.display = "block";
  } else {
    swiperPrev.style.display = "none";
    swiperNext.style.display = "none";
  }
}

function handleUnderline(e) {
  document.querySelectorAll(".projects__filter-item").forEach((element) => {
    element.classList.remove("projects__filter-item_active");
  });
  e.target.classList.add("projects__filter-item_active");
}

document.querySelectorAll(".projects__filter-item").forEach((element) => {
  element.addEventListener("click", handleUnderline);
});

const menuButton = document.querySelector(".projects__button");

menuButton.addEventListener("click", handleMenuOpen);

function handleMenuOpen() {
  menuButton.classList.toggle('projects__button_active')
  document
    .getElementById("filterDrop")
    .classList.toggle("projects__filter-content_show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!((e.target.matches(".projects__button"))||(e.target.matches(".projects__filter-item")))) {
    var myDropdown = document.getElementById("filterDrop");
    if (myDropdown.classList.contains("projects__filter-content_show")) {
      myDropdown.classList.remove("projects__filter-content_show");
    }
    if (menuButton.classList.contains("projects__button_active")) {
      menuButton.classList.remove("projects__button_active");
    }
  }
};

const swiperProjects = new Swiper(".swiper-project", {
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 29,
      centeredSlides: false,
    },
  },
  pagination: {
    el: ".swiper-pagination-project",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next-project",
    prevEl: ".swiper-button-prev-project",
  },
});
